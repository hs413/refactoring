// 기본 코드
const organization = { name: "aaa", country: "BG" };

result += `<h1>${organization.name}</h1>`; // 읽기
organization.name = newName // 쓰기


// 변수 캡슐화
function getRawDataOfOrganization() {
  return organization;
}
result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기
getRawDataOfOrganization().name = newName // 쓰기

// 클래스로 변경
class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {this._data.name = aString}
  get name() {this._data.name}
}

const organization = new Organization({ name: "aaa", country: "BG" });

function getOrganization() {
  return organization
}

result += `<h1>${getOrganization().name}</h1>`; // 읽기
getOrganization().name = newName // 쓰기
