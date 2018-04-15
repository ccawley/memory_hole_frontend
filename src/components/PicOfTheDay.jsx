import React, { Component } from 'react';
import { Grid, Form, Button, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })
  //
  // handleSubmit = () => {
  //   const { pic_of_the_day_url } = this.state
  //
  //   this.props.onSubmit({
  //     pic_of_the_day_url
  //   })
  // }

  render() {
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column textAlign='center' width={13} className='dailyCard'>
              <Form>
                <Form.Group grouped>
                  <h1>Photo of the day</h1>
                  <h2>A picture is worth a thousand words so upload one photo that you think would spark memories if you were to look back on it years from now.</h2>
                  <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}>
                    <p>Drop an image or click to select a file to upload.</p>
                  </Dropzone>
                  <div>
                    <div className="FileUpload">
                      ...
                    </div>

                    <div>
                      {this.state.uploadedFileCloudinaryUrl === '' ? null :
                      <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img src={this.state.uploadedFileCloudinaryUrl} />
                      </div>}
                    </div>
                  </div>
                  <h3>Nice!</h3>
                  <Link to="/evening/lessons"><Button type='submit' /*onClick={this.handleSubmit}*/>Next</Button></Link>
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
