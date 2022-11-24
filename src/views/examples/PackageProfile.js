/*!
=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useEffect } from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import PackageTestimonial from "components/PackageTestimonial/PackageTestimonia.js";
import PropsPoints from "components/PropsPoints/PropsPoints.js";
// @TODO consider another use-case of PropsPoints that uses built-in 
// react's refs method instead of the pure DOM APIs.
// import PropsPointsAdvanced from "components/PropsPoints/PropsPointsAdvanced";
import PackageParser from "components/PackageParser/PackageParser.js";
import { database } from '../../database.js';
import axios from 'axios';
import authorPicture from '../../assets/img/katelibby.jpg'


let ps = null;

export default function PackageProfile() {
  const [tabs, setTabs] = useState(1);

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);

  // @TODO: get twitterLink from API
  // const [twitterLink, setTwitterLink] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:3004/package')
  //     .then(res => {
  //       const twitterLinkTemp = res.data.twitterLink;
  //       if (twitterLinkTemp.toLowerCase().indexOf('javascript:', 0) === 0) {
  //         setTwitterLink('#');
  //       } else {
  //         setTwitterLink(twitterLinkTemp);
  //       }
  //     })
  // }, [])
  

  // @TODO how about we apply an XSS escaping filter
  // and use it in our dangerouslySetInnerHTML usage
  // through-out this app?
  // const xssmap = {
  //   '"': '&quot;',
  //   '\'': '&apos;',
  //   '&': '&amp;',
  //   '>': '&gt;',
  //   '<': '&lt',
  // };
  
  // function xss(s) {
  //   if (!s) {
  //     return s;
  //   }
  
  //   return s.replace(/<|>|&|"|'/g, (m) => {
  //     return xssmap[m];
  //   });
  // }
  

  let [authorScreenshotDescription, setAuthorScreenshotDescription] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3004/package')
      .then(response => {
        setAuthorScreenshotDescription(response.data.authorScreenshotDescription);
      })
  }, []);

  const [packageManifest, setPackageManifest] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3004/package')
      .then(response => {
        setPackageManifest(response.data.packageManifest);
      })
  }, []);

  const [authorName, setAuthorName] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3004/package')
      .then(response => {
        setAuthorName(response.data.authorName);
      })
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default} 
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left" id="authorName">
                  {authorName}
                </h1>
                <h5 className="text-on-back">dev</h5>
                <p className="profile-description">
                  {database.aboutAuthor}
                </p>
                
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href={twitterLink}
                    id="tooltip639225725"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow me
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={authorPicture}
                    />
                    <h4 className="title">Package Author</h4>
                    <CardBody>
                        <PropsPoints {...database} />
                    </CardBody>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Testimonial
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Fund me
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          News
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                          <PackageTestimonial author={database.authorName} {...database.testimonial} />
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">Pay to</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="e.g. 1Nasd92348hU984353hfid"
                                type="text"
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Amount</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="1.587" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Latest news</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Package gains popularity, as cited on <a href="https://snyk.io/advisor/">Snyk Advisor</a></td>
                            </tr>
                            <tr>
                              <td>Feature: support ESM and Node.js 16</td>
                            </tr>
                            <tr>
                              <td>Feature: support node-fetch natively</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <Row className="justify-content-between">
                <Col md="6">
                    <h1 className="profile-title text-left">The package manfiest</h1>
                    <h5 className="text-on-back">package.json</h5>
                </Col>
            </Row>
            <PackageParser packageManifest={packageManifest} />
          </Container>
        </div>

        <div className="section">
            <Container>
                <Row className="justify-content-between">
                    <Col md="6">
                        <Row className="justify-content-between align-items-center">
                            <div dangerouslySetInnerHTML={
                                {__html: `
                                <img src=${database.authorScreenshotURL}
                                     alt=${authorScreenshotDescription} />
                                `
                                }
                            } />
                        </Row>
                    </Col>
                    <Col md="5">
                        <h1 className="profile-title text-left">Project screenshot</h1>
                        <h5 className="text-on-back">...</h5>
                        <p className="profile-description text-left">
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="The Plague" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="katelibby@ellingson.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="Ellingson Mineral Company" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      135 East 57th Street <br />
                      Manhatten <br />
                      NY, USA
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Dade Murphy <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}