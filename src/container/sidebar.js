import { connect } from "react-redux";
import SidebarComponent from "../components/sidebar";

export const Sidebar = connect(
  state => ({
    users: state.users
  }),
  {}
)(SidebarComponent);