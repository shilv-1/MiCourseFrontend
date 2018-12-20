import * as React from "react";
import FeedbackModal from "./FeedbackModal";
import { Button } from "reactstrap";

interface Props {
  terms: string[];
  courseId: string;
  hasFeedback: boolean;
  hasFeedbackLoading: boolean;
  refetchDetail(): void;
}

interface State {
  modalOpen: boolean;
}

export default class FeedbackButtonGroup extends React.Component<Props, State> {

  state = {
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {

    return (
      <>
        {this.props.hasFeedbackLoading
          ? <Button color="primary" disabled={true}>正在加载反馈状态</Button>
          : (
            <Button onClick={this.toggleModal} color="primary" disabled={this.props.hasFeedback}>
              {this.props.hasFeedback
                ? "已反馈"
                : "反馈"
              }
            </Button>
          )
        }

        <FeedbackModal
          refetchDetail={this.props.refetchDetail}
          terms={this.props.terms}
          toggle={this.toggleModal}
          isOpen={this.state.modalOpen}
          courseId={this.props.courseId}
        />
      </>
    );
  }
}
