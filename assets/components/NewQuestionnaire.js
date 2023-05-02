import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import Navbar from "./Navbar";

const NewQuestionnaire = () => {
  return (
    <div className="newquestionnaire">
      <div className="newquestionnaire__navbar">
        <Navbar />
      </div>
      <div className="newquestionnaire__tabs">
        <Tabs>
          <TabList>
            <Tab>Questions</Tab>
            <Tab>Design</Tab>
            <Tab>Extra options</Tab>
            <Tab>Share</Tab>
            <Tab>Results</Tab>
          </TabList>

          <TabPanel className="newquestionnaire__tabs--questions">
            <div className="newquestionnaire__tabs--left">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>? Question types</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="newquestionnaire__button">
                      <div className="newquestionnaire__item">Text choice</div>
                      <div>
                        <Link to="/" className="newquestionnaire__link">
                          Add
                        </Link>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Text choice
                      <span>
                        <Link to="/">Add</Link>
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Text choice</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The respondent can choose either one or multiple answers
                      from the predefined answer list. This question type can be
                      used as a quiz question.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="newquestionnaire__tabs--right">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Questionnaire title and link
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accordion__firsttab">
                      <div className="accordion__left">
                        <h4 className="accordion__left--h4">
                          Questionnaire title
                        </h4>
                        <p className="accordion__left--p">
                          When your questionnaire displays in a browser, this
                          title will be used as a title in the browser tab
                        </p>
                        <input type="text" className="accordion__left--input" />
                      </div>
                      <div className="accordion__right">
                        <h4 className="accordion__right--h4">
                          Questionnaire link
                        </h4>
                        <p className="accordion__righ--p">
                          The link suffix (max. 20 characters) is a unique
                          identifier to your questionnaire's weblink
                        </p>
                        <p>
                          https://s.pointerpro.com/
                          <input
                            type="text"
                            className="accordion__right--input"
                          ></input>
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Intro screen</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default NewQuestionnaire;
