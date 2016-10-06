import axios from 'axios';

export const loadItems = () => {
    return function (dispatch) {
        axios.get('/api/check')
            .then(
            function (response) {
                dispatch({
                    type: 'ITEMS_LOADED',
                    payload: response.data
                });
            }
            ).catch(function (error) {
                console.log(error);
            });
    }
};


export const addItemRequest = (item) => {
    return function (dispatch) {
        console.log(item);
        axios.post('/api/check',
            item)
            .then(
            function (response) {
                dispatch(loadItems());//po dodaniu itemu do isty laduje od nowa zeby miec aktualne dane
            }
            ).catch(function (error) {
                console.log(error);
            });
    }
};

export const removeItemRequest = (itemId) => {
    return function (dispatch) {
          console.log(itemId);
        axios.delete(`/api/check/${itemId}`)
            .then(
            function (response) {
                dispatch(loadItems());//po dodaniu itemu do isty laduje od nowa zeby miec aktualne dane
            }
            ).catch(function (error) {
                console.log(error);
            });
    }
};

export const editItemRequest = (item) => {
    return function (dispatch) {
        axios.put(`/api/check/${item.id}`, item)
            .then(
            function (response) {
                dispatch(loadItems());//po dodaniu itemu do isty laduje od nowa zeby miec aktualne dane
            }
            ).catch(function (error) {
                console.log(error);
            });
    }
};

export const clearForm = () => {
    return {
        type: 'FORM_CLEAR_ITEM'
    };
}

export const editItem = (item) => {
    return {
        type: 'FORM_EDIT_ITEM',
        payload: item
    };
}

export const updateForm = (data) => {
    return {
        type: 'FORM_UPDATE_FIELD',
        payload: data
    };
}

//for sending object to db
export const importData = (data) => {
    return function (dispatch) {
        console.log(data);
        axios.post('/api/check',
            data)
            .then(
            function (response) {
                dispatch({
                    type:'SEND_DATA_TO_DB',
                    payload:response.data
                 });
            }
            ).catch(function (error) {
                console.log(error);
            });
    }
};



