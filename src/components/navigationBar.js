import PropTypes from 'prop-types'
import React from 'react'
import {
  Grid,
  Header,
  Image,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as='h3'>New Content Awaits</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid>
    </Grid>
  </Sidebar>
)

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default HorizontalSidebar;
