const assert = require("assert");

function withErrors({ participants, sports }) {
  /**
   * Подобно оператору new создает экземпляр объекта,
   * используя функцию-конструктор и параметры для нее
   */
  function constructFrom (fnConstructor, ...params) {
    const res = {};

    fnConstructor.apply(res, params);

    Object.setPrototypeOf(res, fnConstructor);

    return res;
  }

  /**
   * Создает пары вида ["вид спорта", "имя участника"],
   * где первому виду спорта соответствует последний участник
   */
  function assignParicipants () {
    const participants = this.participants;
    const sports = this.sports;
    const lastParticipantIndex = participants.length - 1;
    return sports.map((sport, index) => {
      return [sport, participants[lastParticipantIndex - index]];
    });
  }

  function Contest (participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }

  Contest.prototype.constructor.assignParicipants = assignParicipants;

  const contest = constructFrom(Contest, participants, sports);

  return contest.assignParicipants();
}

assert.deepEqual(
  withErrors({
    "participants": ["Mary", "Kate"],
    "sports": ["football", "hockey"],
  }),
  [ [ "football", "Kate" ], [ "hockey", "Mary" ] ],
)
