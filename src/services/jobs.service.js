import { API_URL } from "../configs/constants";
import fetch, { PARAMS } from "../utils/fetchData";

export const getJobs = () =>  
  fetch({
    url: `${API_URL}/jobs`, 
    params: PARAMS.GET
  })

export const getJob = (id) => 
  fetch({
    url: `${API_URL}/jobs/${id}`, 
    params: PARAMS.GET
  })