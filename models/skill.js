const skills = [
    {skill: 'Learn CSS', done: true},
    {skill: 'Learn JS', done: true},
    {skill: 'Learn Node', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(skill, id) {
    skills.splice(id, 1, skill);
  }
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  
  function create(skill) {
    skills.push(skill);
  }

  function getOne(id){
    return skills[id];
}

  function getAll() {
    return skills;
  }