import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'
import Course from '../components/Course'

const SPACE_ID = '0n4m3j6h6sxd'
const ACCESS_TOKEN = 'Cy3dY7iQ1ijgrQWghyIta5uJ0B8HKJXIIE_KDjNN0cA'

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class CoursesList extends Component {
  constructor(props) {
    super(props)
    this.getCourses()
  }

  state = {
    courses: [],
    searchString: ''
  }

  getCourses = () => {
    client.getEntries({
      content_type: 'course',
      query: this.state.searchString
    })
    .then((response) => {
      this.setState({ courses: response.items })
      console.log(this.state.courses)
    })
    .catch((error) => {
      console.log('Error occured while fetching entries')
      console.log(error)
    })
  }

  onSearchInputChange = (event) => {
    console.log("Search changed ..." + event.target.value)
    if(event.target.value) {
      this.setState({ searchString: event.target.value })
    } else {
      this.setState({ searchString: '' })
    }
    this.getCourses()
  }

  render() {
    return (
      <div>
        {
          this.state.courses ? (
            <div>
              <TextField 
                style={{ padding: 24}}
                id='searchInput'
                placeholder='Search for Courses'
                margin='normal'
                onChange={this.onSearchInputChange}
              />
              <Grid
                container
                spacing={5}
                style={{ padding: 24 }}
              >
                {
                  this.state.courses.map((currentCourse, id) => (
                    <Grid
                    key={id}
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                    >
                      <Course course={currentCourse} />
                    </Grid>
                  ))
                }
              </Grid>
            </div>
          ) : 'No courses found'
        }
      </div>
    )
  }
}

export default CoursesList;