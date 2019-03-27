import API from '../helpers/api';

const api = new API();

const AskDirectionIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AskDirectionIntent'
    );
  },
  async handle(handlerInput) {
    const {
      slots: { busStop, busNumber },
    } = handlerInput.requestEnvelope.request.intent;

    const { value: place } = busStop;
    const { value: bus = null } = busNumber;

    const busStopInfo = await api.retrieveBusStopId(place);

    const busesLiveData = await api.retrieveBusStopLiveData(
      busStopInfo.atcocode,
      bus
    );

    const speechData = busesLiveData.map(
      ({ lineName, stopName, leavesIn, direction }) => {
        return `the next ${lineName} to ${direction} will arrive at ${stopName} in ${leavesIn}`;
      }
    );

    const speechText = speechData.join(' while ');

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Bus Information', speechText)
      .getResponse();
  },
};

export default AskDirectionIntentHandler;
