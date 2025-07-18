import * as api from "../Api";

// ✅ Upload video
export const uploadvideo = (videodata) => async (dispatch) => {
  try {
    const { filedata, fileoption } = videodata;
    const { data } = await api.uploadvideo(filedata, fileoption);
    dispatch({ type: 'POST_VIDEO', data });
    dispatch(getallvideo());
  } catch (error) {
    alert(error.response.data.message);
  }
};

// ✅ Fetch all videos
export const getallvideo = () => async (dispatch) => {
  try {
    const { data } = await api.getvideos();
    dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

// ✅ Like video
export const likevideo = (likedata) => async (dispatch) => {
  try {
    const { id, Like } = likedata;
    const { data } = await api.likevideo(id, Like);
    dispatch({ type: "POST_LIKE", payload: data });
    dispatch(getallvideo());
  } catch (error) {
    console.log(error);
  }
};

// ✅ View video
export const viewvideo = (viewdata) => async (dispatch) => {
  try {
    const { id } = viewdata;
    const { data } = await api.viewsvideo(id);
    dispatch({ type: "POST_VIEWS", data });
    dispatch(getallvideo());
  } catch (error) {
    console.log(error);
  }
};
