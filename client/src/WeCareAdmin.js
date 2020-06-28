import React, { Component } from 'react';

export default class WeCareAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { textData: "Text" };
        
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event) {
        console.log("we are getting in here",event.target.value)
        this.setState({
            textData:event.target.value
        })
       
    }
    handleSubmit = () => {
        console.log("hello")
        this.props.addMsg(this.state.text);
    }
    textAreaPart = () => {
        console.log("oh man",this.state.textData)
        if (this.state.textData == "Text") {
            console.log("hel yeah");
            return <div>
                <form onSubmit={this.handleSubmit()}>
                    <input type="text" id="text" value="" />
                    <input type="Submit" value="Submit"/>
                </form>
            </div>
        }
        if (this.state.textData === "Text-Image") {
            console.log("hel yeah")
            return <div>
                <input type="text" value=""></input><br></br>
               <input type="text" value=""></input>
            </div>
        }
    
    }
    render() {
        return (
            <div>
                <select className="Dropdown" onChange={this.handleChange}>
                        <option value="Text">Text</option>
                        <option value="Text-Image">Text-Image</option>
                        <option value="Text-Video">Text-Video</option>
                        <option value="Image">Image</option>
                        <option value="Video">Video</option>
                </select>
                { this.textAreaPart() }
            </div>
        )
    }
}
