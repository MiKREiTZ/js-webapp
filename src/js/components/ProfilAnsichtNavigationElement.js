import React from "react";

export default class NavigationComponent extends React.Component {

    createNavigation() {
        return                 <div className="container">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" >findMe</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><a href="#/profile"><span className="glyphicon glyphicon-user"></span> Profil</a></li>
                            <li><a href="#/dating"><span className="glyphicon glyphicon-send"></span> Dating</a></li>
                            <li><a href="#/friendstab"><span className="glyphicon glyphicon-asterisk"></span> Freunde</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-envelope"></span> Nachrichten <span class="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#/mails/inbox">Posteingang</a></li>
                                    <li><a href="#/mails/new">Nachricht erstellen</a></li>
                                    <li><a href="#/mails/outbox">gesendete Nachrichten</a></li>
                                    <li><a href="#/mails/archive">Archiv</a></li>
                                </ul>
                            </li>
                            <li>
                                <form role="form" className="navbar-form navbar-input-group">
                                    <div className="input-group">
                            <span className="input-group-btn">
                                <button className="btn btn-default btn-sm" type="button"><span className="glyphicon glyphicon-search"></span></button>
                            </span>
                                        <div className="form-group">
                                            <input type="text" className="form-control input-sm" placeholder="Suche" />
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#/profile/settings"><span className="glyphicon glyphicon-wrench"></span> Einstellungen</a></li>
                            <li><a href="#/logout"><span className="glyphicon glyphicon-log-out"></span> ausloggen</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>;
    }

    render() {
        return (
            <div>{this.createNavigation()}</div>
        );
    }
}
