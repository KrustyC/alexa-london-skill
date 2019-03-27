import moment from 'moment';
import request from './request';

export default class API {
  async _request(path, data) {
    return request(path, data);
  }

  _getHumanizedTimeDifference(date, time) {
    const [hour, minute] = time.split(':');
    const departureDate = moment(date)
      .locale('en')
      .set({ hour, minute });
    const now = moment().locale('en');

    return moment.duration(departureDate.diff(now)).humanize();
  }

  _getDepartureInfo(departure) {
    const departureDate = departure.expected_departure_date;
    const departureTime = departure.expected_departure_time;
    return {
      lineName: departure.line_name,
      direction: departure.direction,
      leavesIn: this._getHumanizedTimeDifference(departureDate, departureTime),
    };
  }

  async retrieveBusStopId(place) {
    const path = 'places.json';
    const data = {
      query: place,
      type: 'bus_stop',
    };

    const { member } = await this._request(path, data);
    // @TODO Check for east and west bound
    return member[0];
  }

  async retrieveBusStopLiveData(busStopId, busId = null) {
    const path = `bus/stop/${busStopId}/live.json`;
    const data = {
      group: 'route',
      limit: 1,
    };

    const result = await this._request(path, data);

    if (busId && busId in result.departures) {
      return [
        {
          stopName: result.stop_name,
          ...this._getDepartureInfo(result.departures[busId][0]),
        },
      ];
    }

    return Object.keys(result.departures).map(currentBusId => ({
      stopName: result.stop_name,
      ...this._getDepartureInfo(result.departures[currentBusId][0]),
    }));
  }
}
