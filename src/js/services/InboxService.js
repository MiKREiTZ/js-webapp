
import CouchDbApi from "findme-react-couchdb-api";

import connSettings from "../../conn-settings";

export default class InboxService {
    findMsgToMe(to, callbacks) {
        let dm = new CouchDbApi.DaoManager(connSettings);
        let msgDao = dm.getDao(CouchDbApi.MessageDAO);

        msgDao.findByTo(to, {
            success: function (data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
                /*else {
                 if (callbacks && typeof callbacks.error === "function") {
                 callbacks.error("");
                 }*/
                //}
            },
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });
    }

    resolveUserName(id, callbacks) {
        let dd = new CouchDbApi.DaoManager(connSettings);
        let usrDao = dd.getDao(CouchDbApi.UserDAO);
        usrDao.findById(id, {
            success: function (data) {
                if (data) {
                    if (callbacks && typeof callbacks.success === "function") {
                        callbacks.success(data);
                    }
                }
            },
            error: function (err) {
                console.error(err);
                if (callbacks && typeof callbacks.error === "function") {
                    callbacks.error(err);
                }
            }
        });

    }
}