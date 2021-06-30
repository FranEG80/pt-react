import React, { useContext, useEffect, useState } from 'react'
import Button from '../atom/Button'
import Container from '../atom/Container'
import Text from '../atom/Text'
import Navbar from '../molecule/Navbar/Navbar'
import { useLocation } from 'wouter'
import LinkA from '../atom/LinkA'
import parseDate from '../../utils/parseDate'
import { getJob } from '../../services/jobs.service'
import { UserContext } from '../../stores/UserStore'


function JobDetailScreen({id}) {
  const [job, setJob] = useState()
  const [loaded, setLoaded] = useState(false)
  const setLocation = useLocation()[1]
  const {onError} = useContext(UserContext)

  useEffect(() => {
    const requestJob = async () => {
      const response = await getJob(id)
      if (response?.error) {
        onError(response.message)
        return setLocation('/')
      }
      setJob(response.data) 
      setLoaded(true)
    }
    requestJob()
  }, [id, onError, setLocation])


  if (!loaded) {
    return (<Text type='h2'>Loading...</Text>)
  }

  return (
    <Container
      className="flex w90 h90 column"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <Navbar/>
      {job 
        ? (
          <Container className='flex column'>
            <Container className='flex' style={{justifyContent: "space-between"}}>
              <Text type='h1'>{job.title}</Text>
              <Text type='h2'>{job.location}</Text>
            </Container>
            <Text type='h3' style={{paddingLeft: 20}}>{job.description}</Text>
            <Container className='flex' style={{justifyContent: "space-between", marginTop: 10}}>
              <Text>Publication Date: {parseDate(job.publicationDate)} - Update at: {parseDate(job.updatedAt)}</Text>
              <Text style={{alignSelf: 'flex-end'}}>Link: <LinkA isExternal target='_blank' url={job.link} /></Text>
            </Container>
          </Container>
        )
        : ( <Text type='h2'>Job Not Found</Text>)
      }
      <Button className='cancel' onPress={()=>{setLocation('/')}} style={{width: 100, marginTop: 20}} >Back</Button>
    </Container>
  )
}

export default JobDetailScreen

