const AskDirectionIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AskDirectionIntent'
    );
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

export default AskDirectionIntentHandler;
