import React, { Component } from 'react';
import { Grid, Form, Button, Responsive, Icon } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class PicOfTheDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(`${process.env.REACT_APP_CLOUDINARY_UPLOAD_URL}`)
                        .field('upload_preset', `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


  handleSubmit = () => {
    //const { pic_of_the_day_url } = this.state.uploadedFileCloudinaryUrl
    const uploadedFileCloudinaryUrl = this.state.uploadedFileCloudinaryUrl
    //console.log('pic of the day!', pic_of_the_day_url)
    this.props.onSubmit({
      pic_of_the_day_url: uploadedFileCloudinaryUrl
    })
    this.props.history.push('/evening/lessons')
  }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row style={{ marginTop: '10px' }} centered>
            <Grid.Column textAlign='center' width={13} className='nightlyCard1'>
              <Form>
                <Form.Group grouped>
                  <h1>Photo of the day</h1>
                  <h2>A picture is worth a thousand words so upload one photo that you think would spark memories if you were to look back on it years from now.</h2>
                  <div style={{ marginLeft: '50px' }}>
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}>
                      <p>Click to select a file to upload.</p>
                      <div>
                        <div className="FileUpload">
                          ...
                        </div>
                        <div>
                          {this.state.uploadedFileCloudinaryUrl === '' ? null :
                          <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <Icon color='green' name='checkmark' size='huge' />
                          </div>}
                        </div>
                      </div>
                    </Dropzone>
                  </div>
                  <h3>Nice!</h3>
                  <Button onClick={this.handleSubmit}>Next</Button>
                  {/*<Link to="/evening/lessons"><Button onClick={this.handleSubmit}>Next</Button></Link>*/}
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Responsive>
    );
  }
}

export default PicOfTheDay;
