import Alexa from 'ask-sdk-core';
import {
  AskDirectionIntentHandler,
  CancelAndStopIntentHandler,
  ErrorHandler,
  HelpIntentHandler,
  LaunchRequestHandler,
  SessionEndedRequestHandler,
} from './handlers';

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    AskDirectionIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .lambda();
