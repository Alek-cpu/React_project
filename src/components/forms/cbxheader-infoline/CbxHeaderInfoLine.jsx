import React, {Component} from 'react';

export default class CbxHeaderInfoLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {
        let {isChecked} = this.state
        return (
            <form className="rowSpaceCbx">
                <input
                    type="checkbox"
                    className="formCbx countTask"
                    id="checkbox"
                    checked={isChecked}
                    onChange={this.toggleChange}
                /><label
                htmlFor="checkbox"/>
            </form>
        );
    }
}
