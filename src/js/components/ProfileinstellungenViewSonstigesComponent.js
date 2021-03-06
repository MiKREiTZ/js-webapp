import React from "react";

import DefaultProfilImage from "./DefaultProfilImage";

export default class ProfileinstellungenViewSonstigesComponent extends React.Component {

    createProfileinstellungenViewSonstigesComponent() {
        return( <div className="container">
            <div className="row">
                <br/>
                <h3>Sonstiges</h3>
                <div className="col-md-3">
                    <br/>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 1</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 2</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 3</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <br/>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 4</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 5</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value=""/>Checkbox 6</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <span>Option:</span>
                    <div class="checkbox">
                        <label><input type="radio" name="optradio"/> Alle</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="radio" name="optradio"/> Nur Freunde</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="radio" name="optradio"/> niemanden</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br/>
                    <button className="btn btn-primary btn-md" type="button">
                        <span className="glyphicon glyphicon-lock"></span> speichern</button>
                </div>
            </div>
            <hr/>
        </div>);
    }

    render() {
        return (
            <div>{this.createProfileinstellungenViewSonstigesComponent()}
            </div>
        );
    }
}