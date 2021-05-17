import { apiUrl } from "../../../constants";
import axios from "axios";

const trackerSuccess = tracker =>({
    type:'tracker/success',
    payload: tracker
})

export const startTracking = (userID, GKId, longitude, latitude) => {
    return async (dispatch, getState) => {
        try {
            console.log('inside actions', userID)
            const response = await axios.post(`${apiUrl}/tracker/startTracking`, {
                userID,
                GKId,
                longitude,
                latitude
            })
            console.log('from DB', response.data)
            dispatch(trackerSuccess(response.data))
        } catch(error) {
            if (error.response) {
              console.log('heeeelp',error.response.data);
            } else {
              console.log('that is happening?',error.message);
            }
        }
    }
}

export const stopTracker = () => ({ type: 'tracker/stop'});
