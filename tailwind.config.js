/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }


//   <body>
//   <!-- Background Image Section -->
//   <div
//     class="bg-main w-[100%] h-[auto] px-[4%] xl:px-[2%] md:px-[3%] 2xl:px-[2%] grid gap-[3vh] 2xl:gap-[4vh]"
//     style="
//       background-image: url(/assets/background.jpeg);
//       background-position: center;
//       background-size: cover;
//       background-attachment: fixed;
//     "
//   >


//     <!-- Navigation Bar -->
//     <div
//       class="navbar w--[100%] h-[7vh] md:-[8vh] bg-[rgba(0,0,0,0.85)] rounded-es-[15px] rounded-ee-[15px] flex justify-between items-center px-[5%] backdrop-blur-[0.75px]"
//     >
//       <div class="logo w-auto h-[inherit] flex justify-start items-center">
//         <h1
//           class="uppercase font-bold tracking-[0.25vw] text-white text-[30px]"
//         >
//           <span class="text-[rgb(246,139,7)]">H</span>et
//         </h1>
//       </div>
//       <div
//         class="menu w-auto h-[inherit] flex justify-end items-center *:text-white gap-[2.5vw] text-[15px]"
//       >
//         <a href="#Home" class="hidden md:flex">Home</a>
//         <a href="#About" class="hidden md:flex">About</a>
//         <a href="#Resume" class="hidden md:flex">Resume</a>
//         <a href="#Skills" class="hidden md:flex">Skills</a>
//         <a href="#Projects" class="hidden md:flex">Projects</a>
//         <a href="#Contact" class="hidden md:flex">Contact</a>
//         <img
//           id="menu-btn"
//           class="flex md:hidden w-[35px]"
//           src="/Assets/menu icon.png"
//           alt=""
//         />
//       </div>
//     </div>
//     <!-- Navigation Bar -->



//     <!-- Drop Down Menu HTML -->
//     <div class="dropdown-menu">
//       <div class="main">
//         <div class="a"><a href="#Home">Home</a></div>
//         <div class="a"><a href="#About">About</a></div>
//         <div class="a"><a href="#Resume">Education</a></div>
//         <div class="a"><a href="#Exp">Experience</a></div>
//         <div class="a"><a href="#Skills">Skills</a></div>
//         <div class="a"><a href="#Projects">Projects</a></div>
//         <div class="a"><a href="#Contact">Contact</a></div>
//         <div class="img">
//           <img id="close-btn" src="/Assets/close.png" alt="" />
//         </div>
//       </div>
//     </div>
//     <!-- Drop Down Menu HTML -->



//     <!-- Hero Section -->
//     <div class="hero-section w-[100%] h-[auto] bg-[rgba(0,0,0,0.85)] px-[5%] rounded-[15px] grid gap-[10vh] backdrop-blur-[0.75px] abs">

//       <!-- <a href="#Home"><button class="absolute right-[10%] top-[55vh] w-[40px] h-[40px] rounded-[50%] bg-white"><img src="/assets/arrow-up-line.svg" alt=""></button></a> -->
      

//       <!-- Section 01 -->
//        <div id="Home" class="section01 w-[100%] h-auto lg:flex justify-center items-center gap-[2.5vw] pb-[2.5vh]">

//           <!-- Left Section -->
//            <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease" class="left w-[100%] lg:w-[60%] flex justify-center items-start gap-[1.5vh] md:gap-[2.5vh] flex-col md:ps-[100px] py-[8vh] pe-[2.5vw] leading-[85px] font-bold">


//               <h1 class="text-[rgb(246,139,7)] text-[18px] mb-[-2.5vh] font-semibold uppercase">hello !</h1>


//               <h1 class="text-[40px] leading-[50px] sm:text-[40px] md:text-[75px] md:leading-[85px] font-extrabold text-white">I'm <span class="text-[rgb(246,139,7)]">Het Ratanpara...</span></h1>


//               <h4 class="text-white text-[15px] md:text-[25px] md:leading-[30px] leading-[18px] font-normal">I'm passionate <span class="text-[rgb(246,139,7)]">Software Engineer</span> & <span class="text-[rgb(246,139,7)]">Back-End Developer</span></h4>
              
              
//               <a href="https://www.linkedin.com/in/het-ratanpara-53bb92318/" target="_blank">
//                   <button class="mt-[2vh] w-auto h-[40px] md:h-[50px] md:rounded-[25px] flex justify-center items-center rounded-[20px] px-[2vw] text-[rgb(246,139,7)] text-[10px] md:text-[15px] border-[1px] border-[rgb(246,139,7)] hover:bg-[rgb(246,139,7)] hover:text-[black] duration-[0.75s]">CONNECT WITH ME</button>
//               </a>


//            </div>
//           <!-- Left Section -->

//           <!-- Right Section -->
//            <div class="right grid w-[80%] ms-[10%] h-[50vh] lg:h-[80vh] lg:w-[40%] bg-[rgba(21,21,21)] lg:bg-[rgba(0,0,0,0)] rounded-[15px] shadow-[0_1px_5px_5px_rgba(255,255,255,0.4)] lg:shadow-none">
//               <img src="/assets/HetPhoto.png" class="w-[100%] h-[100%] object-cover">
//            </div>
//           <!-- Right Section -->

//        </div>
//       <!-- Section 01 -->


//       <!-- Section 02 -->
//       <div id="About" class="section02 w-[100%] h-auto lg:flex justify-center items-center gap-[2.5vw]">

//           <!-- Right Section -->
//           <div class="right lg:grid w-[80%] h-[80vh] hidden lg:w-[40%] bg-[rgba(21,21,21)] lg:bg-[rgba(0,0,0,0)] rounded-[15px] shadow-[0_1px_5px_5px_rgba(255,255,255,0.4)] lg:shadow-none">
//               <img src="/assets/HetPhoto.png" class="w-[100%] h-[100%] object-cover">
//            </div>
//           <!-- Right Section -->

//           <!-- Left Section -->
//            <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="left w-[100%] lg:w-[60%] flex justify-strat lg:justify-start lg:items-start md:justify-start md:items-center items-start gap-[1.5vh] md:gap-[2.5vh] flex-col pe-[2.5vw] leading-[85px] font-bold text-white relative">
  
//               <div class="main w-[100%] h-auto px-[2.5%] lg:px-0">
//                   <h1 class="text-[50px] lg:text-[60px] tracking-[0.1vw] text-center sm:text-center md:text-center lg:text-left 2xl-text-[65px]"><span class="text-[rgb(241,139,7)]">A</span>bout <span class="text-[rgb(241,139,7)]">M</span>e</h1>
  
//                   <h4 class="text-[11.5px] leading-[15px] lg:text-[16px] lg:leading-[20PX] font-normal text-center sm:text-center md:text-center lg:text-left  me-[2.5vw] mt-[0vh] text-[#9f9f9f]">I’m passionate about solving problems through technology and continuously improving my skills to stay ahead in the industry.</h4>

//                   <!-- Personal Details Table -->

//                   <div class="pe-6 py-6 mt-[1.5vh]">
//                     <div class="mb-2 flex gap-[1.5vw] items-center">

//                       <div class="w-[20%] md:w-[15%] gap-[0.75vh] flex-col flex font-normal *:text-xs *:md:text-lg *:lg:text-xl">
//                         <span>Name </span>
//                         <span>DOB </span>
//                         <span>Age </span>
//                         <span>Degree </span>
//                         <span>Mail </span>
//                       </div>
                      
//                       <div class="w-[80%] md:w-[85%] flex-col gap-[0.75vh] flex font-normal *:text-xs *:md:text-lg *:lg:text-xl">
//                         <span>: Het Ratanpara</span>
//                         <span>: September 22, 2003</span>
//                         <span>: 21</span>
//                         <span>: B.E. Computer Engineer</span>
//                         <span>: hetratanpara.dev@gmail.com</span>
//                       </div>
//                     </div>
//                   </div>

//                   <!-- Personal Details Table -->
  
//                   <a href="https://drive.google.com/file/d/1SJS2Sxk3NNdcoTrRPKVGxVeoBBK-sCnf/view?usp=drivesdk" target="_blank">
//                     <button class="mt-[1.5vh] w-auto h-[40px] md:h-[50px] md:rounded-[25px] flex justify-center items-center rounded-[20px] px-[2vw] text-[rgb(246,139,7)] text-[10px] md:text-[15px] border-[1px] border-[rgb(246,139,7)] hover:bg-[rgb(246,139,7)] hover:text-[black] duration-[0.75s] mb-[1.5vh]">DOWNLOAD RESUME</button>
//                   </a>
//               </div>

//            </div>
//           <!-- Left Section -->

//        </div>
//       <!-- Section 02 -->


//       <!-- Section 03 -->

//       <div id="Resume" class="section03 w-[100%] h-[auto] px-[5%]">          


//         <!-- Main Content -->

//         <div class="main w-[100%] h-auto px-[2.5%] lg:px-0 flex flex-col gap-[1vh]">

//           <!-- Heading Text -->
//           <h1 class="text-[50px] lg:text-[60px] tracking-[0.1vw] text-white font-bold text-center  2xl-text-[65px] rounded-ss-[30px] rounded-ee-[30px] mb-[1vh]">
//             <span class="text-[rgb(241,139,7)]">R</span>esume
//           </h1>
//           <!-- Heading Text -->

//           <h1 class="text-[11.5px] leading-[15px] lg:text-[16px] lg:leading-[20PX] font-normal me-[2.5vw] text-[#9f9f9f] text-center">I’m passionate about solving problems through technology and continuously improving my skills to stay ahead in the industry.</h1>

//           <!-- Education & Experience Section -->


//           <div class="edu-exp w-[100%] h-[auto] flex flex-col lg:flex-row  gap-[2.5vw] justify-center items-start mt-[1vh]">

//             <!-- Eduation Section -->

//             <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="edu w-[100%] lg:w-[55%] h-[auto]  grid gap-[1.5vh]">

//               <!-- Heading -->
//                <div class="head w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white text-[30px] font-semibold px-[5%]">
//                 Education
//                </div>
//               <!-- Heading -->

//               <!-- Box 01 -->

//               <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%]">

//                 <div class="header flex items-center justify-start gap-[1vw] text-[rgb(241,139,17)]">

//                   <div class="w-[7.5px] sm:w-[10px] md:w-[15px] h-[7.5px] sm:h-[10px] md:h-[15px] rounded-[50%] bg-[rgb(241,139,7)]"></div>

//                   <h1 class="uppercase text-[13px] xs:text-[15px] md:text-[18px] font-semibold">B. E. in computer engineering</h1>

//                 </div>


//                 <div class="content mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p>Gujarat Technological University - GEC Rajkot</p>

//                   <button class="w-[55%] md:w-[30%] text-[11px] xs:text-[13px] md:text-[16px] font-normal h-auto px-[0.5vw] py-[0.5vh] border-[0.75px] border-[rgba(241,139,7,0.5)] rounded-[7.5px] hover:bg-[rgb(45,45,45)]">2021 - 2025</button>

//                   <p>CGPA : 7.8</p>

//                   <dl>
//                       <dt>Relevant Coursework :</dt>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%] mt-[0.5vh]">• Data Structures and Algorithms</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Algorithm Design and Analysis</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Core and Advanced Java</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Object Oriented Programming in Java</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Database Management System</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Computer Networks</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Operating System</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Python for Data Science</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Compiler Design</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Artificial Intelligence</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Machine Learning</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Information Security</dd>
//                       <dd class="text-[10px] xs:text-[12px] md:text-[14px] ms-[5%]">• Mobile Application Development</dd>
//                   </dl>
//               </div>

//                </div>

//               <!-- Box 01 -->

//               <!-- Box 02 -->

//               <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%]">

//                 <div class="header flex items-center justify-start gap-[1vw] text-[rgb(241,139,17)]">

//                   <div class="w-[7.5px] sm:w-[10px] md:w-[15px] h-[7.5px] sm:h-[10px] md:h-[15px] rounded-[50%] bg-[rgb(241,139,7)]"></div>

//                   <h1 class="uppercase text-[13px] xs:text-[15px] md:text-[18px] font-semibold">higher secondARY EDUCATION</h1>

//                 </div>


//                 <div class="content mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p>Shri N. P. Bhalodia High School - Junagadh</p>

//                   <button class="w-[35%] md:w-[20%] text-[11px] xs:text-[13px] md:text-[16px] font-normal h-auto px-[0.5vw] py-[0.5vh] border-[0.75px] border-[rgba(241,139,7,0.5)] rounded-[7.5px] hover:bg-[rgb(45,45,45)]">2021</button>

//                   <p>Percentage : 89.00%</p>

//                   <p>Grade : A2</p>
//                 </div>
              
//                </div>

//               <!-- Box 02 -->


//               <!-- Box 03 -->

//               <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%]">

//                 <div class="header flex items-center justify-start gap-[1vw] text-[rgb(241,139,17)]">

//                   <div class="w-[7.5px] sm:w-[10px] md:w-[15px] h-[7.5px] sm:h-[10px] md:h-[15px] rounded-[50%] bg-[rgb(241,139,7)]"></div>

//                   <h1 class="uppercase text-[13px] xs:text-[15px] md:text-[18px] font-semibold">secondARY EDUCATION</h1>

//                 </div>


//                 <div class="content mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p>Shree Vivekanand High School - Vanthali</p>

//                   <button class="w-[35%] md:w-[20%] text-[11px] xs:text-[13px] md:text-[16px] font-normal h-auto px-[0.5vw] py-[0.5vh] border-[0.75px] border-[rgba(241,139,7,0.5)] rounded-[7.5px] hover:bg-[rgb(45,45,45)]">2019</button>

//                   <p>Percentage : 85.80%</p>

//                   <p>Grade : A2</p>
//                 </div>
              
//                </div>

//               <!-- Box 03 -->

//             </div>

//             <!-- Eduation Section -->


//             <!-- Eduation Section -->

//             <div id="Exp" class="exp w-[100%] lg:w-[45%] h-[auto]  flex justify-center items-center gap-[1.5vh] flex-col">

//               <!-- Heading -->
//                <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="head w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white text-[30px] font-semibold px-[5%]">
//                 Experience
//                </div>
//               <!-- Heading -->

//               <!-- Box 01 -->

//               <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%]">

//                 <div class="header flex items-center justify-start gap-[1vw] text-[rgb(241,139,17)]">

//                   <div class="w-[7.5px] sm:w-[10px] md:w-[15px] h-[7.5px] sm:h-[10px] md:h-[15px] rounded-[50%] bg-[rgb(241,139,7)]"></div>

//                   <h1 class="uppercase text-[13px] xs:text-[15px] md:text-[18px] font-semibold">BACKEND DEVELOPER INTERN</h1>

//                 </div>


//                 <div class="content mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p><a href="https://creativeinfoway.com/" target="_blank">Creative infoway &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>

//                   <button class="w-[70%] md:w-[45%] text-[11px] xs:text-[13px] md:text-[16px] font-normal h-auto px-[0.5vw] py-[0.5vh] border-[0.75px] border-[rgba(241,139,7,0.5)] rounded-[7.5px] hover:bg-[rgb(45,45,45)]">June 2024 - July 2024</button>


//                   <ul class="list-disc ms-[5%] mt-[0.5vh] *:mt-[0.75vh] text-[11px] xs:text-[13px] md:text-[15px]">
//                     <li>Developed and maintained backend systems, ensuring seamless integration and functionality for client applications.</li>
//                     <li>Developed Authentify, a <b>JWT-based authentication system</b> for secure user session management,enabling <b>protected routes</b> and user-specific content access.</li>
//                     <li>Utilized <b>MongoDB</b> for efficient data storage and retrieval, supporting user registration, login, and logout functionalities with <b>Express.js</b>.</li>
//                     <li>Implemented password hashing with bcrypt to ensure secure storage of user credentials, enhancing overall application security.</li>
//                   </ul>

//                 </div>
              
//                </div>

//               <!-- Box 01 -->

//               <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease">
//                 <a href="https://drive.google.com/file/d/1SJS2Sxk3NNdcoTrRPKVGxVeoBBK-sCnf/view?usp=drivesdk" target="_blank">
//                 <button class="mt-[2.5vh] lg:mt-[10vh] w-auto h-[40px] md:h-[50px] md:rounded-[25px] flex justify-center items-center rounded-[20px] px-[2vw] text-[rgb(246,139,7)] text-[10px] md:text-[15px] border-[1px] border-[rgb(246,139,7)] hover:bg-[rgb(246,139,7)] hover:text-[black] duration-[0.75s] mb-[1.5vh]">DOWNLOAD RESUME</button>
//               </a>
//               </div>
              

//             </div>

//             <!-- Experience Section -->

//           </div>


//           <!-- Education & Experience Section -->

//         </div>

//         <!-- Main Content -->


//        </div>

//       <!-- Section 03 -->


//       <!-- Section 04 -->

//       <div id="Skills" class="section04 w-[100%] h-[auto] px-[5%]">


//         <!-- Main Content -->

//         <div class="main w-[100%] h-auto px-[2.5%] lg:px-0 flex flex-col gap-[1vh]">

//           <!-- Heading Text -->
//           <h1 class="text-[50px] lg:text-[60px] tracking-[0.1vw] text-white font-bold text-center  2xl-text-[65px] rounded-ss-[30px] rounded-ee-[30px] mb-[1vh]">
//             <span class="text-[rgb(241,139,7)]">S</span>kills
//           </h1>
//           <!-- Heading Text -->

//           <!-- Programming Language -->
          
//           <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//             <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//             <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%] text-center">Programming Language</h3>
//             <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//           </div>
          
//           <!-- when you want add skill you have increase value of "pb-[80px]".... -->
//           <div class="row w-[100%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5%] md:gap-[1.5vh] lg:gap-[2vh] mb-[4vh] pb-[80px] md:pb-[0px]">
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/java.png" alt="">
//               <h1>Java</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="js" src="/Assets/js.jpeg" alt="">
//               <h1>Javascript</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="cplus" src="/Assets/C++.jpeg" alt="">
//               <h1>C++</h1>
//             </div>


//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/python.png" alt="">
//               <h1>Python</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="js" src="/Assets/html.png" alt="">
//               <h1>HTML</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="cplus" src="/Assets/css.png" alt="">
//               <h1>CSS</h1>
//             </div>
//           </div>
          
//           <!-- Programming Language -->

//           <!-- Framework -->
          
//           <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//             <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//             <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%]">Frameworks</h3>
//             <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//           </div>
          
          
//           <div class="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5%] md:gap-[1.5vh] lg:gap-[2vh] mt-[0.75vh] mb-[5vh]">
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/node js.png" alt="">
//               <h1>Node.js</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="js" src="/Assets/express js.png" alt="">
//               <h1>Express.js</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="cplus" src="/Assets/react.png" alt="">
//               <h1>React</h1>
//             </div>
//           </div>
          
//           <!-- Framework -->


//           <!-- Database -->
          
//           <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//             <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//             <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%]">Database</h3>
//             <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//           </div>
          
          
//           <div class="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5%] md:gap-[1.5vh] lg:gap-[2vh] mt-[0.75vh] mb-[5vh]">
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/mongodb.png" alt="">
//               <h1>MongoDB</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="js" src="/Assets/my sql.png" alt="">
//               <h1>My SQL</h1>
//             </div>
            
          
//           </div>
          
//           <!-- Database -->

//           <!-- Dev Tools -->
          
//           <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//             <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//             <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%]">Dev Tools</h3>
//             <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//           </div>
          
          
//           <div class="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5%] md:gap-[1.5vh] lg:gap-[2vh] mt-[0.75vh] mb-[5vh]">
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/github.png" alt="">
//               <h1>Git & GitHub</h1>
//             </div>
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//               <img class="w-[30px]" id="js" src="/Assets/vs.png" alt="">
//               <h1>VS Code</h1>
//             </div>
          
//           </div>
          
//           <!-- Dev Tools -->

//           <!-- Dev Tools -->
          
//           <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//             <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//             <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%]">Other</h3>
//             <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//           </div>
          
          
//           <div class="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5%] md:gap-[1.5vh] lg:gap-[2vh] mt-[0.75vh]">
//             <div class="skill w-[100%] h-[50px] flex justify-start items-center px-[5%] gap-[2.5%] text-white font-semibold rounded-[10px] bg-[rgb(21,21,21)] text-[18px]" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">                        
//               <img class="w-[30px]" src="/Assets/postman.png" alt="">
//               <h1>Postman</h1>
//             </div>
          
//           </div>
          
//           <!-- Dev Tools -->            
          
//         </div>

//         <!-- Main Content -->

//       </div>

//       <!-- Section 04 -->


//       <!-- Section 05 -->

//       <div id="Projects" class="section05 w-[100%] h-[auto] px-[5%]">
        
//         <!-- Heading Text -->
//         <h1 class="text-[50px] lg:text-[60px] tracking-[0.1vw] text-white font-bold text-center  2xl-text-[65px] rounded-ss-[30px] rounded-ee-[30px] mb-[1vh]">
//           <span class="text-[rgb(241,139,7)]">P</span>rojects
//         </h1>
//         <!-- Heading Text -->


//         <div class="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
//           <button class="w-[15%] h-[2px] bg-[rgb(206,141,7)]"></button>
//           <h3 class="head text-[rgb(241,139,7)] text-[22.5px] md:text-[30px] font-bold px-[2.5%] text-center">Something I've Built</h3>
//           <button class="w-[15%] h-[2px] bg-[rgb(241,139,7)]"></button>
//         </div>

//         <div>

//           <div class="exp w-[100%] h-[auto]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5vh] md:gap-[2vh] lg:gap-[3vh] flex-col  mt-[2.5vh]">


//             <!-- Box 01 -->

//             <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%] flex flex-col items-center juctify-center overflow-hidden">


//               <!-- Box 01 -->

//               <div class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white flex flex-col items-center juctify-center hover:bg-[rgb(241,139,7)] hover:scale-[1.05] duration-[0.75s]">
//                 <div class="image w-[40px] md:w-[50px] h-[40px] md:h-[50px] p-[1.5%] lg:p-[0.75%] bg-[black] border-[0.75px] border-[rgb(241,139,7)] rounded-[7.5px] md:rounded-[10px] flex justify-center items-center shadow-[5px_5px_#787777bf;] md:shadow-[8px_8px_#787777bf;]">
//                   <img class="w-[30px] md:w-[40px] lg:w-[45px]" src="/Assets/project.png" alt="">
//                 </div>


//                 <div class="content text-center mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p class="font-bold text-[20px] xs:text-[22px] md:text-[24px]"><a href="https://github.com/hetpatel3/Authentify" target="_blank">Authentify  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>


//                   <p class="font-semibold text-[11px] xs:text-[13px] md:text-[15px]">Node.js, Express.js, MongoDB, HTML, CSS, JavaScript</p>
                  
//                   <ul class="list-disc ms-[0%] mt-[0.5vh] *:mt-[0.75vh] text-[11px] xs:text-[13px] md:text-[13px] lg:text-[15px] text-start">
//                     <li>Created <strong>Authentify</strong> , a JWT-based authentication system for secure user sessions and protected routes.</li>
//                     <li>Used MongoDB and Express.js for user management, including registration, login, and logout, with password hashing using bcrypt for added security.</li>
//                   </ul>

//                 </div>
//               </div>

//               <!-- Box 01 -->

              
            
//              </div>

//             <!-- Box 01 -->


//             <!-- Box 01 -->

//             <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%] flex flex-col items-center juctify-center overflow-hidden">


//               <!-- Box 01 -->

//               <div class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white flex flex-col items-center juctify-center hover:bg-[rgb(241,139,7)] hover:scale-[1.05] duration-[0.75s]">
//                 <div class="image w-[40px] md:w-[50px] h-[40px] md:h-[50px] p-[1.5%] lg:p-[0.75%] bg-[black] border-[0.75px] border-[rgb(241,139,7)] rounded-[7.5px] md:rounded-[10px] flex justify-center items-center shadow-[5px_5px_#787777bf;] md:shadow-[8px_8px_#787777bf;]">
//                   <img class="w-[20px] md:w-[25px]" src="/Assets/project 2.png" alt="">
//                 </div>


//                 <div class="content text-center mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p class="font-bold text-[20px] xs:text-[22px] md:text-[24px]"><a href="https://github.com/hetpatel3/Travelsphere" target="_blank">Travelsphere  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>


//                   <p class="font-semibold text-[11px] xs:text-[13px] md:text-[15px]">HTML, CSS, JavaScrip</p>
                  
//                   <ul class="list-disc ms-[0%] mt-[0.5vh] *:mt-[0.75vh] text-[11px] xs:text-[13px] md:text-[13px] lg:text-[15px] text-start">
//                     <li>Designed a responsive and visually attractive travel website utilizing HTML, CSS, and JavaScript, adhering to front-end web development practices and design standards.</li>
//                     <li>Created user-friendly navigation, captivating content sections, and dynamic features to improve the overall user experience.</li>
//                   </ul>

//                 </div>
//               </div>

//               <!-- Box 01 -->

              
            
//              </div>

//             <!-- Box 01 -->


//             <!-- Box 01 -->

//             <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white px-[5%] flex flex-col items-center juctify-center overflow-hidden">


//               <!-- Box 01 -->

//               <div class="box w-[100%] h-auto py-[1vh] bg-[rgb(17,16,16)] rounded-[10px] text-white flex flex-col items-center juctify-center hover:bg-[rgb(241,139,7)] hover:scale-[1.05] duration-[0.75s]">
//                 <div class="image w-[40px] md:w-[50px] h-[40px] md:h-[50px] p-[1.5%] lg:p-[0.75%] bg-[black] border-[0.75px] border-[rgb(241,139,7)] rounded-[7.5px] md:rounded-[10px] flex justify-center items-center shadow-[5px_5px_#787777bf;] md:shadow-[8px_8px_#787777bf;]">
//                   <img class="w-[30px] md:w-[40px] lg:w-[45px]" src="/Assets/project 3.png" alt="">
//                 </div>


//                 <div class="content text-center mt-[1vh] ps-[5%] flex flex-col gap-[1vh] text-[13px] xs:text-[15px] md:text-[18px]">
//                   <p class="font-bold text-[20px] xs:text-[22px] md:text-[24px]"><a href="https://github.com/hetpatel3/QuickBet" target="_blank">QuickBet  <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>


//                   <p class="font-semibold text-[11px] xs:text-[13px] md:text-[15px]">JavaScript</p>
                  
//                   <ul class="list-disc ms-[0%] mt-[0.5vh] *:mt-[0.75vh] text-[11px] xs:text-[13px] md:text-[13px] lg:text-[15px] text-start">
//                     <li>Created a slot machine application in JavaScript, enabling users to enter deposit amounts and place bets on multiple lines, with algorithms dynamically calculating winning outcomes and payouts.</li>
//                     <li>Integrated error-handling mechanisms to deliver a seamless user experience, ensuring accurate input validation and guiding users smoothly through the betting process within the console interface.</li>
//                   </ul>

//                 </div>
//               </div>

//               <!-- Box 01 -->

              
            
//              </div>

//             <!-- Box 01 -->

            
            

//           </div>

//         </div>

//       </div>

//       <!-- Section 05 -->


//       <!-- Section 06 -->

//       <div id="Contact" class="section06 w-[100%] h-[auto] px-[5%]">

//         <!-- Heading Text -->
//         <h1 class="text-[40px] md:text-[50px] lg:text-[60px] tracking-[0.1vw] text-white font-bold text-center  2xl-text-[65px] rounded-ss-[30px] rounded-ee-[30px] mb-[1vh]">
//           <span class="text-[rgb(241,139,7)]">C</span>ontact <span class="text-[rgb(241,139,7)]">M</span>e
//         </h1>
//         <!-- Heading Text -->


//         <!-- row -->

//         <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="row w-[100%] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start">

//           <!-- Box 01 -->
//            <div class="box w-[100%] h-auto p-[5%] flex flex-col gap-[1.5vh] justify-center items-center">


//             <div class="w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%]">
//               <div class="image w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%] flex justify-center items-center bg-[rgb(21,21,21)] hover:shadow-[0_0_5px_3px_rgba(241,139,7,0.4)] hover:scale-[1.1] duration-[0.75s]">
//                 <img src="/Assets/address.png" class="w-[35px] md:w-[40px] hover:scale-[1.1] duration-[0.75s]">
//               </div>
//             </div>

//             <p class="font-semibold text-[18px] xs:text-[20px] md:text-[22px] text-white mt-[1vh]">Address</p>

//             <p class="font-semibold text-[13px] xs:text-[14px] md:text-[15px] text-[#d3d3d3] text-center">Jashraj Nagar, Mavdi, Rajkot- 360004</p>
//            </div>
//           <!-- Box 01 -->

//           <!-- Box 02 -->
//           <div class="box w-[100%] h-auto p-[5%] flex flex-col gap-[1.5vh] justify-center items-center">


//             <div class="w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%]">
//               <div class="image w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%] flex justify-center items-center bg-[rgb(21,21,21)] hover:shadow-[0_0_5px_3px_rgba(241,139,7,0.4)] hover:scale-[1.1] duration-[0.75s]">
//                 <img src="/Assets/email.png" class="w-[35px] md:w-[40px] hover:scale-[1.1] duration-[0.75s]">
//               </div>
//             </div>

//             <p class="font-semibold text-[18px] xs:text-[20px] md:text-[22px] text-white mt-[1vh]">Email</p>

//             <a href="mailto:hetratanpara.dev@gmail.com"><p class="font-semibold text-[13px] xs:text-[14px] md:text-[15px] text-[#d3d3d3] text-center">hetratanpara.dev@gmail.com</p></a>
//            </div>
//           <!-- Box 02 -->

//           <!-- Box 03 -->
//           <div class="box w-[100%] h-auto p-[5%] flex flex-col gap-[1.5vh] justify-center items-center">


//             <div class="w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%]">
//               <div class="image w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%] flex justify-center items-center bg-[rgb(21,21,21)] hover:shadow-[0_0_5px_3px_rgba(241,139,7,0.4)] hover:scale-[1.1] duration-[0.75s]">
//                 <img src="/Assets/git.png" class="w-[35px] md:w-[40px] hover:scale-[1.1] duration-[0.75s]">
//               </div>
//             </div>

//             <p class="font-semibold text-[18px] xs:text-[20px] md:text-[22px] text-white mt-[1vh]">GitHub</p>

//             <a href="https://github.com/hetpatel3"><p class="font-semibold text-[13px] xs:text-[14px] md:text-[15px] text-[#d3d3d3] text-center">https://github.com/hetpatel3</p></a>
//            </div>
//           <!-- Box 03 -->

//           <!-- Box 04 -->
//           <div class="box w-[100%] h-auto p-[5%] flex flex-col gap-[1.5vh] justify-center items-center">


//             <div class="w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%]">
//               <div class="image w-[65px] h-[65px] md:w-[75px] md:h-[75px] rounded-[50%] flex justify-center items-center bg-[rgb(21,21,21)] hover:shadow-[0_0_5px_3px_rgba(241,139,7,0.4)] hover:scale-[1.1] duration-[0.75s]">
//                 <img src="/Assets/social.png" class="w-[35px] md:w-[40px] hover:scale-[1.1] duration-[0.75s]">
//               </div>
//             </div>

//             <p class="font-semibold text-[18px] xs:text-[20px] md:text-[22px] text-white mt-[1vh]">Social Profiles</p>

//             <p class="flex gap-[2vw]">
//               <a href="https://www.linkedin.com/in/het-ratanpara-53bb92318/" target="_blank"><img class="w-[25px]" src="/Assets/in.png" alt=""></a>
//               <a href="https://x.com/het_r3" target="_blank"><img class="w-[25px]" src="/Assets/twit.png" alt=""></a>
//               <a href="https://www.instagram.com/het_r9?igsh=NnRtMzJucjF4OHcy" target="_blank"><img class="w-[25px]" src="/Assets/insta.png" alt=""></a>
//             </p>
//            </div>
//           <!-- Box 04 -->

//         </div>

//         <!-- row -->


//         <!-- Box -->
//          <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease" class="box w-[100%] px-[5%] py-[2.5%] text-white flex flex-col items-center justify-center gap-[1.5vh] mt-[2.5vh]">
//           <h1 class="text-[rgb(241,139,7)] text-[28px] xs:text-[32px] md:text-[37px] font-semibold">GET IN TOUCH</h1>


//           <p class="text-[12px] xs:text-[15px] md:text-[18px] text-center text-[#d3d3d3]">I am actively seeking opportunities in software engineering, with a strong focus on backend development and mobile app development. If you have a project or opportunity that you think I would be a good fit for, please feel free to reach out to me.</p>
              
//           <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease">
//             <a href="mailto:hetratanpara.dev@gmail.com" target="_blank">
//             <button class="mt-[2.5vh] lg:mt-[10vh] w-auto h-[40px] md:h-[50px] md:rounded-[25px] flex justify-center items-center rounded-[20px] px-[2vw] text-[rgb(246,139,7)] text-[10px] md:text-[15px] border-[1px] border-[rgb(246,139,7)] hover:bg-[rgb(246,139,7)] hover:text-[black] duration-[0.75s] mb-[1.5vh] font-semibold">CONTACT ME</button>
//           </a>
//           </div>

//          </div>
//         <!-- Box -->



//       </div>

//       <!-- Section 06 -->


//     </div>
//     <!-- Hero Section -->



//     <!-- Footer -->
//     <div
//       class="footer w=[100%] h-[7vh] md:-[8vh] bg-[rgba(0,0,0,0.85)] rounded-ss-[15px] rounded-se-[15px] backdrop-blur-[0.75px] text-white text-center px-[5%] text-[12px] md:text-[15px] grid justify-center items-center">
//       <p>
//         Copyright©2024 All Rights Reserved. Developed By
//         <a
//           href="https://www.linkedin.com/in/het-ratanpara-53bb92318/"
//           target="_blank"
//           ><span class="font-semibold text-[rgb(246,139,7)]"
//             > Het Ratanpara</span></a> & <span class="text-[rgb(241,139,7)] font-semibold"><a href="https://www.linkedin.com/in/rutvik-bhatti-981032341/" target="_blank"> Rutvik Bhatti</span></a>.
//       </p>
//     </div>
//     <!-- Footer -->


//   </div>
//   <!-- Background Image Section -->
// </body>
