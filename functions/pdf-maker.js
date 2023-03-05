import pdfDocuments from 'pdfkit';

export async function handler (event, context, callback) {

  const makePDF = async () => {

    return new Promise(resolve => {
      const doc = new pdfDocuments()
  
      doc.fontSize(24)
      .text('Hello World!', 100, 100);
  
      // doc.addPage({
      //   margins: {
      //     top: 50,
      //     bottom: 50,
      //     left: 62,
      //     right: 72
      //   },
      //   size: 'A4',
      //   layout: 'portrait'
      // })
  
      
      const buffers = []
      doc.on('data', buffers.push.bind(buffers))
      doc.on('end', () => {
        const pdf = Buffer.concat(buffers)
        resolve(pdf)
      })
      doc.end()
    })
  }

  const stream = await makePDF()
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
    body: stream.toString('base64'),
    isBase64Encoded: true
  }

  return response
}