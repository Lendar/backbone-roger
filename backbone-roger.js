function BackboneRoger(key) {
    return function (method, model) {
        if (!model._storageEventListener)
        {
            model._storageEventListener = function (e) {
                if (e.key === key) {
                    model.fetch();
                }
            };
            window.addEventListener('storage', model._storageEventListener, false);
        }
        switch (method) {
        case 'read':
            model.set(JSON.parse(localStorage.getItem(key)));
            break;
        case 'create':
        case 'update':
            localStorage.setItem(key, JSON.stringify(model));
            break;
        }
    };
}

exports.BackboneRoger = BackboneRoger;
