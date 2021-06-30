import React, { useContext, useEffect, useState } from 'react'
import { getJobs } from '../../services/jobs.service';
import Container from "../atom/Container";
import Navbar from '../molecule/Navbar/Navbar';
import SearchButton from '../molecule/SearchButton/SearchButton';
import ListJobs from '../molecule/ListJobs/ListJobs';
import { UserContext } from '../../stores/UserStore';

function HomeScreen() {
  const [listJobs, setListJobs] = useState([])
  const { onError } = useContext(UserContext)

  useEffect(()=> {
    handleSearchJobs()
  },[])

  const searchJobs = () => {
    getJobs()
      .then(response => {
        if (response?.error) {
          return onError(response.message)
        }
        setListJobs(response.data)
      })
  }

  const handleSearchJobs = () => {
    onError(false)
    searchJobs()
  }

  return (
    <Container 
      className="flex w90 h90 column"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <Navbar/>
      <SearchButton
        style={{marginTop: 20, marginBottom: 20, paddingLeft: 15, paddingRight: 15}} 
        onSearch={handleSearchJobs}
      />
      {listJobs.length > 0 && (<ListJobs list={listJobs}/>)}
    </Container>
  )
}

export default HomeScreen
