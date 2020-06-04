import React from 'react';
import ImageCardForm from 'components/forms/ImageCardForm';
import { EventDef } from 'components/forms/formDefs/EventDef';
import { getEvent, saveEvent } from 'services/eventService';

export class EventForm extends React.Component {


  handleSave = async (data) => {
    await saveEvent(data);
    this.props.onFinish();
  }

  render() {
    return (
      <ImageCardForm
        fieldDefs={EventDef}
        onFetch={id => getEvent(id)}
        onSave={this.handleSave}
        onCancel={this.props.onCancel}
        {...this.props}
      />
    );
  }
};

EventForm.propTypes = {};

EventForm.defaultProps = {};

export default EventForm;
