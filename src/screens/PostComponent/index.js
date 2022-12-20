import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getPostComponentData } from '../../actions'

export class PostComponent extends React.Component {
  state = {
    title: '',
    body: ''
  }
  handleOnchange = event => {
    let title = event.target.value;
    this.setState({ title: title })
  }
  handleOnchangeBody = event => {
    let body = event.target.value;
    this.setState({ body: body })
  }
  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
          style={{paddingRight: 10}}
            autoFocus
            onChange={this.handleOnchange.bind(this)}
            id="standard-basic"
            label="Enter Title"
          />
          <TextField
            autoFocus
            onChange={this.handleOnchangeBody.bind(this)}
            id="standard"
            label="Enter Body"
          />
          <Button
            onClick={() => this.props.getPostComponentData(this.state.title, this.state.body)}
            color="primary"
            variant="contained">Send
        </Button>

        </form>
        <h2>You entered:</h2>
        <p>Title ={this.props.newText ? this.props.newText.title : ''}</p>
        <p>Body ={this.props.newText ? this.props.newText.body : ''}</p>
      </div >
    )

  }
}

const mapStateToProps = (state) => ({
  newText: state.usersReducer.newText
})

const mapDispatchToProps = dispatch => ({
  getPostComponentData: (title, body) => dispatch(getPostComponentData(title, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)
