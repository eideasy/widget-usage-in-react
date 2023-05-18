import React from 'react';
import EideasyWidget from './EideasyWidget';

export class SigningView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '',
      docId: '',
      clientIdInputValue: '',
      docIdInputValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWidgetSuccess(data) {
    console.log(data);
  }

  handleWidgetFail(error) {
    console.log(error);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        clientId: prevState.clientIdInputValue,
        docId: prevState.docIdInputValue,
      }
    });
  }

  onDocIdInputChange = (event) => this.setState({ docIdInputValue: event.target.value });
  onClientIdInputChange = (event) => this.setState({ clientIdInputValue: event.target.value });
  render() {
    return (
      <div>
        <div>
          {this.state.counter}
        </div>
        <EideasyWidget
          clientId={this.state.clientId}
          docId={this.state.docId}
          onSuccess={this.handleWidgetSuccess}
          onFail={this.handleWidgetFail}
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <span>docId</span>
              <input type="text" value={this.state.docIdInputValue} onChange={this.onDocIdInputChange} />
            </label>
          </div>
          <div>
            <label>
              <span>clientId</span>
              <input type="text" value={this.state.clientIdInputValue} onChange={this.onClientIdInputChange} />
            </label>
          </div>
          <div>
            <input type="submit" value="Save" />
          </div>
        </form>

      </div>
    );
  }
}
