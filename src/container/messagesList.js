import { connect } from "react-redux";
import MessagesListComponent from "../components/messagesList";

export const MessagesList = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesListComponent);