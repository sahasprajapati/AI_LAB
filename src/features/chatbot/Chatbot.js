import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chatbot from "./ChatbotClass";
import {
  addAnswer,
  addQuestion,
  selectMessageHistory,
} from "./chatbotSlice";

const c = new Chatbot();

const addAllQuestions = () => {
  c.addQuestionsAnswer(
    ["Hello", "Hi", "Hey"],
    "Hi! Welcome to Khwopa Q&A. How Can I Help You?"
  );

  c.addQuestionsAnswer(
    ["Are KhEC & KhCE same?"],
    "No, Khwopa College of Engineering (KhCE) is affiliated to Tribhuvan University and Khwopa Engineering College (KhEC) is affiliated to Purbanchal University."
  );

  c.addQuestionsAnswer(
    ["Can a student be awarded with more than one scholarship?"],
    "No. But, the candidate can choose the better one for him/her. "
  );
  c.addQuestionsAnswer(
    ["Is there hostel facility in college?"],
    "No, there is not such facility. But there are several private hostels nearby."
  );
  c.addQuestionsAnswer(["Fee Structure"], "");

  c.addQuestionsAnswer(
    ["Does the college conduct any career based counselling programs?"],
    "Yes, counselling programs are conducted from time to time. Experienced professionals in the respective fields are invited for their valuable suggestions and sharing their working experiences with the students."
  );
  c.addQuestionsAnswer(
    [
      "How are students involved in the practical field of their respective courses",
    ],
    "College organizes different expos and exhibition at certain intervals for improving students' practical skills in their fields. Students also get involved and participate in different competitions organized by various organizations of their respective fields."
  );
  c.addQuestionsAnswer(
    ["Can I get extra classes in college?"],
    "Yes, it is possible to get extra classes if requested by students in needy time."
  );
  c.addQuestionsAnswer(
    ["Is parent meeting conducted timely?"],
    "Yes, it is conducted timely on the requirement basis."
  );
  c.addQuestionsAnswer(
    ["When deposit can be refunded?"],
    "Deposits can only be refunded after completing all the four years courses."
  );
  c.addQuestionsAnswer(
    ["Does college provide any scholarship?"],
    "College provides full scholarship for the applicants of each program with minimun 75% in +2 science or I.Sc., or Diploma in engineering and scoring the highest marks in the entrance exam.Scholarship may be granted to economically needy, diligent and disciplined student. On the basis of the marks secured in semester examination, college will provide scholarships of 100%, 50% and 25%."
  );
  c.addQuestionsAnswer(
    ["What extra curriculum activities are conducted in college?"],
    "Various extra curriculur activities and sports competitions are conducted in college like chess, table tennis, badminton and football competition "
  );
  c.addQuestionsAnswer(
    ["Is college uniform compulsory?"],
    "Yes, it is compulsory to be in uniform. Students without uniform are not allowed to sit in the class. There is no excuse for not being in uniform."
  );
  c.addQuestionsAnswer(
    ["What is the procedure for interview?"],
    "Some oral exams are conducted in the interview. You might need to solve some written problems depending on your academic performance or the performance during the interview."
  );
  c.addQuestionsAnswer(
    ["What is the fee structure?"],
    "It’s Rs.5,86,500 for Bachelor in Electrical, Rs.5,86,500 for Bachelor in Computer and Rs.6,01,500 for Bachelor in Civil."
  );
  c.addQuestionsAnswer(
    ["Can I get online form facility?"],
    "Yes, you can fill up online form."
  );
  c.addQuestionsAnswer(
    ["What is the admission procedure?"],
    "Student must fill up online entrance form.He/She will be selected according to their rank in IOE exam. After selection he/ she must attend the college interview. After students are approved from interview, Firstly he/she can visit college reception to know about the requirements for admission, fee structures and documents required etc."
  );
  c.addQuestionsAnswer(
    ["What courses are available now?"],
    "Bachelor in  Civil Engineering,\nBachelor in  Computer Engineering,\nBachelor in  Electrical Engineering"
  );
  c.addQuestionsAnswer(
    ["Why is it important to attend my college classes?"],
    "Aside from the fact that you are paying for it, showing up for class will give you an immediate advantage in learning what your professors think are important, and what is most likely to show up on those final exams. Class is also where you get the chance to meet new people, form study groups, etc."
  );
};

addAllQuestions();
const questionList = c.listQuestions();

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const ChatbotComponent = () => {
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const messageHistory = useSelector(selectMessageHistory);
  const dispatch = useDispatch();

  const handleAskQuestion = () => {
    dispatch(addQuestion({ question: question }));

    dispatch(addAnswer({ answer: c.ask(question) }));
    setQuestion("");
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader title="Questions For Chatbot" />
              <CardContent>
                {questionList.map((question, index) => {
                  return <Typography key={index}>{question}</Typography>;
                })}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Card>
              <CardHeader
                title="ChatBot Messaging"
                subheader="Chat with Us"
                avatar={
                  <Avatar aria-label="messenger" className={classes.orange}>
                    C
                  </Avatar>
                }
              />
              <CardContent>
                <Grid container spacing={4} xs={12}>
                  {messageHistory.map((message, index) => {
                    return index % 2 !== 0 ? (
                      <Grid
                        item
                        key={index}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        xs={12}
                      >
                        <Grid item xs={2}>
                          <Avatar className={classes.orange}>C</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography align="left">{message}</Typography>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid
                        xs={12}
                        spacing={2}
                        item
                        key={index}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                      >
                        <Grid item xs={10}>
                          <Typography align="right">{message}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Avatar align="right" className={classes.purple}>
                            U
                          </Avatar>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </CardContent>
              <CardActions>
                <TextField
                  label="Message"
                  plaardceholder="Enter question"
                  variant="outlined"
                  aria-label="Node name"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleAskQuestion();
                  }}
                />
                <Button variant="outlined" onClick={handleAskQuestion}>
                  Ask Question
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(ChatbotComponent);
