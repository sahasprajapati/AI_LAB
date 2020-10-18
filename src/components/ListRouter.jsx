import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import { withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import {
  AccountTreeOutlined,
  FilterListOutlined,
  InfoOutlined,
  MessageOutlined,
  SearchOutlined,
} from "@material-ui/icons";

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
});

const ListRouter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <List aria-label="secondary mailbox folders">
          <ListItem>
            <ListItemText primary="Lab Works" />
          </ListItem>
          <Divider />
          <ListItemLink
            to="/AI_LAB/lab2"
            primary="Lab 2"
            icon={<AccountTreeOutlined />}
          />
          <ListItemLink
            to="/AI_LAB/lab3"
            primary="Lab 3"
            icon={<FilterListOutlined />}
          />
          <ListItemLink
            to="/AI_LAB/lab4"
            primary="Lab 4"
            icon={<SearchOutlined />}
          />
          <ListItemLink
            to="/AI_LAB/lab5"
            primary="Lab 5"
            icon={<MessageOutlined />}
          />
        </List>

        <Divider />
        <List aria-label="main mailbox folders">
          <ListItemLink
            to="/AI_LAB/lab2"
            primary="Contact"
            icon={<InboxIcon />}
          />
          <ListItemLink
            to="/AI_LAB/lab3"
            primary="About"
            icon={<InfoOutlined />}
          />
        </List>
      </Paper>
    </div>
  );
};

export default withRouter(ListRouter);
