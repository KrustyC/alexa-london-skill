const AskDirectionIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AskDirectionIntent'
    );
  },
  handle(handlerInput) {
    const {
      slots: { busStop, busNumber },
    } = handlerInput.requestEnvelope.request.intent;

    const { value: bus } = busNumber;

    const { value: stop } = busStop;

    const speechText = `The next ${bus} is gonna be at ${stop} in 5 minutes`;

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

export default AskDirectionIntentHandler;
