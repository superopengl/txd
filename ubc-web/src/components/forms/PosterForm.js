import React from 'react';
import ImageCardForm from 'components/forms/ImageCardForm';
import { PosterDef } from 'components/forms/formDefs/PosterDef';
import { getPoster, savePoster } from 'services/posterService';

export class PosterForm extends React.Component {


  handleSave = async (data) => {
    await savePoster(data);
    this.props.onFinish();
  }

  render() {
    return (
      <ImageCardForm
        fieldDefs={PosterDef}
        onFetch={id => getPoster(id)}
        onSave={this.handleSave}
        onCancel={this.props.onCancel}
        {...this.props}
      />
    );
  }
};

PosterForm.propTypes = {};

PosterForm.defaultProps = {};

export default PosterForm;
