import PDFDocument from 'pdfkit';

export async function handler (event, context, callback) {
  const makePDF = async () => {
    const doc = new PDFDocument();
    doc.fontSize(25).text('Hello World!');
    // doc.font('data/Helvetica.afm');
    return doc;
  };

  const doc = await makePDF();
  const chunks = [];
  let stream = doc.pipe({
    write(chunk) {
      chunks.push(chunk);
    },
    end() {
      callback(null, Buffer.concat(chunks));
    },
  });

  stream.on('error', (err) => {
    callback(err);
  });

  const response = {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work "*.eval.team, eval.team, *localhost*" */
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment;filename=invoice.pdf`
    },
    body: Buffer.concat(chunks).toString('base64'),
    isBase64Encoded: true
  };

  return response;
}
