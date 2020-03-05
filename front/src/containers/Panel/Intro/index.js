import React from "react";
import { connect } from "react-redux";

import IncomeStats from "components/Widgets/IncomeStats";
import IconedList from "components/Widgets/IconedList";
import SingleMessage from "components/Widgets/SingleMessage";

const data = {
  listData: [
    {
      type: "",
      href: "/panel/accounts",
      title: "<strong>Check accounts</strong>",
      subtitle: ""
    },
    {
      type: "image",
      href: "/panel",
      title: "<strong>Check accounts from other banks</strong>",
      subtitle: ""
    }
  ],
  messageData: {
    title: "Received message example",
    sender: "TAS",
    recipient: "Ion",
    content:
      "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, laboriosam.</p><p>Qui porro voluptatibus nisi tempore nam deleniti quo. Porro, nulla.</p>"
  }
};

const PanelHome = ({ user }) => {
  return (
    <div className="row panel-content">
      <div className="col-md-12">
        <h1>
          Welcome {user.firstName} {user.lastName}
        </h1>
      </div>

      <div className="col-md-8">
        <IncomeStats />
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-sm-6 col-md-12">
            <IconedList items={data.listData} />
          </div>
          <div className="col-sm-6 col-md-12">
            <SingleMessage {...data.messageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.profile.data
  };
};

export default connect(mapStateToProps)(PanelHome);
