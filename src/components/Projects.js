import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import a from "../assets/img/1.jpg";
import b from "../assets/img/2.jpg";
import c from "../assets/img/3.jpg";
import d from "../assets/img/4.jpg";
import e from "../assets/img/6.jpg";
import f from "../assets/img/7.jpg";
import g from "../assets/img/11.jpg";
import h from "../assets/img/12.jpg";
import i from "../assets/img/13.jpg";
import j from "../assets/img/14.jpg";
import k from "../assets/img/15.jpg";
import l from "../assets/img/16.jpg";
import m from "../assets/img/17.jpg";
import n from "../assets/img/18.jpg";
import o from "../assets/img/19.jpg";


// import  from "../assets/img/project-img1.png";

// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Login Page",
      description: "For user logging into the website",
      imgUrl: e,
    },
    {
      title: "Register Page",
      description: "For Register new user ",
      imgUrl: f,
    },
    {
      title: "Home Page",
      description: "After logged in user sees only that book which is selling from his nearby area",
      imgUrl: a,
    },
    {
      title: "Search",
      description: "Helps user to search their desired book",
      imgUrl: b,
    },
    {
      title: "Book Addition Page",
      description: "Helps the seller to add their book for sell",
      imgUrl: c,
    },
    {
      title: "Cart Items",
      description: "Helps the user to add their book at cart so that whenever he has to buy he not need to search",
      imgUrl: d,
    },
  ];
  const todo = [
    {
      title: "Login Page",
      description: "For user logging into the website",
      imgUrl: g,
    },
    {
      title: "Register Page",
      description: "For Register new user ",
      imgUrl: h,
    },
    {
      title: "Home Page",
      description: "After logged in user sees their todos which the have enter earlier",
      imgUrl: i,
    },
    {
      title: "Reading Description",
      description: "On clicking any todo in home page user can read their description",
      imgUrl: k,
    },
    {
      title: "Todo Addition Page",
      description: "On clicking the plus icon on right bottom corner user can create their todo",
      imgUrl: j,
    },
    {
      title: "Share button",
      description: "On clicking share icon on todo a share page will open where user can write the username of those user whom which they have to share their todo.",
      imgUrl: l,
    },
    {
      title: "See shared todo",
      description: "On clicking shared button in home page user can see the todos which are shared with them by other user. ",
      imgUrl: m,
    },
    {
      title: "Reading shared todo",
      description: "On clicking shared todo you can read their description.",
      imgUrl: o,
    },
    {
      title: "Delete Todo's",
      description: "In this image you can see that one todo is deleted from todo page.",
      imgUrl: n,
    },
    

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BookStore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">DropTask</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>BookStore is a Market place for second end books .</p>
                    <p>It makes easy to share books with anyone as their is no market specially for second end books which connect peoples , where they can sell their old books which they had already read and are in good condition and make can a good amount from them .
And the other person who need the book can get it from here at cheaper rate which no such hactics to find the person who is selling this book . In this both buyers and seller have benifits because it make this process very easy. Anyone who need the book either they are child or elder they can get it any type of book from here...</p>
<p><a href="https://www.youtube.com/watch?v=14TNenZ93eg">Video Link</a></p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Drop Task is an TodoList Application where user can drop their task that they have to do.</p>
                      <p>Technology used - ReactJS in Frontend and NodeJS in Backend and MySQL is used as a Database and also typescript.</p><p>Features - User can create , update , delete and shared their task with other users.</p><p>Helpful in making team projects.</p>
                      <Row>
                        {
                          todo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
