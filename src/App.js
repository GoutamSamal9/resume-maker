import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <div className="relative mx-auto mt-20 w-full container border">
      <div className="w-full text-white bg-image h-auto rounded  border-b">
        <div className="flex p-8 justify-between rounded">
          <div className="w-3/6">
            <div className="flex h-52 w-52">
              <img
                alt="profile"
                className="rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQE-sxNzKK850g/profile-displayphoto-shrink_800_800/0/1671548874037?e=1686182400&v=beta&t=lu_gTzSZhly5cGjn2KurxSl24EIRUS5ejj176mqp_Kg"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-4xl font-medium">Goutam Samal</h1>
              <h3 className="mt-2 text-xl font-medium">
                Software engineer in Dropy Tech
              </h3>
              <p className="mt-2">
                Experienced Software Engineer with a demonstrated history of
                working in the information technology and services industry.
                Skilled in HTML, JavaScript, React.js, and Node.js. Strong
                engineering professional with a Bachelor of Technology - BTech
                focused in Computer Science from Eastern Academy of Science and
                Technology (EAST), Phulnakhara.
              </p>
            </div>
          </div>

          <div className="w-3/6 flex flex-col justify-between text-black text-right">
            <div>
              <ul>
                <li className="text-sm py-2">
                  Bhubaneswar, Odisha{" "}
                  <span className="ml-2">
                    <FontAwesomeIcon
                      className="text-blue-500"
                      size="lg"
                      icon={faLocationDot}
                    />
                  </span>
                </li>
                <li className="text-sm py-2">
                  <a href="mailto:gsamal101@gmail.com">
                    gsamal101@gmail.com
                    <span className="ml-2">
                      <FontAwesomeIcon
                        className="text-blue-500"
                        size="lg"
                        icon={faEnvelope}
                      />
                    </span>
                  </a>
                </li>
                <li className="text-sm py-2">
                  <a href="tel:+919348954861">
                    +91 9348954861
                    <span className="ml-2">
                      <FontAwesomeIcon
                        className="text-blue-500"
                        size="lg"
                        icon={faPhone}
                      />
                    </span>
                  </a>
                </li>
                <li className="text-sm py-2">
                  <a href="https://github.com/GoutamSamal9">
                    https://github.com/GoutamSamal9
                    <span className="ml-2">
                      <FontAwesomeIcon
                        className="text-blue-500"
                        size="lg"
                        icon={faGithub}
                      />
                    </span>
                  </a>
                </li>
                <li className="text-sm py-2">
                  <a href="https://www.linkedin.com/in/goutam-samal/">
                    https://www.linkedin.com/in/goutam-samal/
                    <span className="ml-2">
                      <FontAwesomeIcon
                        className="text-blue-500"
                        size="lg"
                        icon={faLinkedin}
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="py-2">
                <h2 className="text-xl font-medium">Current Organization</h2>
                <h3 className="text-sm text-blue-500 font-bold mt-0.5">
                  Eval.team
                </h3>
              </div>
              <div className="py-2">
                <h3 className="text-xl font-medium">Total Experience</h3>
                <h3 className="text-sm text-blue-500 font-bold mt-0.5">
                  3 years
                </h3>
              </div>
              <div className="py-2">
                <h3 className="text-xl font-medium">Relevant Experience</h3>
                <h3 className="text-sm text-blue-500 font-bold mt-0.5">
                  2.5 years
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between flex-wrap mt-6 text-black p-4 h-auto">
        <div className="w-3/6 p-4">
          <div className="">
            <h2 className="text-xl font-medium">Education</h2>
          </div>
          <div className="mt-2 h-auto">
            <h3 className="text-lg font-medium">
              Biju Patnaik University of Technology, Odisha
            </h3>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              Degree:-{" "}
              <span className="text-blue-500">
                Bachelor of Technology - BTech
              </span>
            </h4>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              Field of study:-{" "}
              <span className="text-blue-500">
                Computer Software Engineering
              </span>
            </h4>

            <h4 className="text-sm font-bold mt-1">
              {" "}
              <span className="text-blue-500">2016-2020</span>
            </h4>
            <div className="mt-1">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page edit
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/6 p-4">
          <div className="">
            <h2 className="text-xl font-medium">Experience</h2>
          </div>
          <div className="mt-2 h-auto">
            <h3 className="text-lg font-medium">Defraudit</h3>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              Type:- <span className="text-blue-500">Full time</span>
            </h4>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              <span className="text-blue-500">Oct 2021 - Present</span>
            </h4>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              Position:-{" "}
              <span className="text-blue-500">Software Engineer</span>
            </h4>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              <span className="text-blue-500">Oct 2022 - Present</span>
              <span className="text-xs"> 1 yr 7 mos</span>
            </h4>
            <div className="mt-1">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page edit
              </p>
            </div>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              Position:-{" "}
              <span className="text-blue-500">Frontend Developer</span>
            </h4>
            <h4 className="text-sm font-bold mt-1">
              {" "}
              <span className="text-blue-500">Oct 2022 - Oct 2022</span>
              <span className="text-xs"> 1 yr</span>
            </h4>
            <div className="mt-1">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page edit
              </p>
            </div>
          </div>
        </div>
     
        <div className="w-3/6 p-4">
          <div className="">
            <h2 className="text-xl font-medium">Skills</h2>
          </div>
          <div className="mt-2 h-auto">
            <div className="w-full">
              <ul>
                <li className="mt-2">
                  <h2 className="text-sm font-medium">ReactJs</h2>
                  <div className="w-full mt-2 bg-gray-400 h-3 rounded-full flex justify-center items-center">
                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                    <div className="h-full w-1/4 rounded-full"></div>
                  </div>
                </li>
                <li className="mt-2">
                  <h2 className="text-sm font-medium">ReactJs</h2>
                  <div className="w-full mt-2 bg-gray-400 h-3 rounded-full flex justify-center items-center">
                    <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
                    <div className="h-full w-1/4 rounded-full"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/6 p-4">
          <div className="">
            <h2 className="text-xl font-medium">Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
