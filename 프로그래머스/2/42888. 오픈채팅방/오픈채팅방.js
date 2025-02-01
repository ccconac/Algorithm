function solution(record) {
  const userInfo = {};
  const openchatLog = [];
  const commandMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((v) => {
    const [command, id, nickname] = v.split(' ');

    if (command !== 'Change') openchatLog.push([command, id]);
    if (nickname) userInfo[id] = nickname;
  });

  return openchatLog.map(([command, uid]) => {
    return `${userInfo[uid]}${commandMapping[command]}`;
  });
}