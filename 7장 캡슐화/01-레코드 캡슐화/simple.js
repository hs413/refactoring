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
    this._name = data.name;
    this._country = data.country;
  }

  get name() {this._name}
  set name(aString) {this._name = aString}
  get country() {this._country}
  set country(aCountryCode) {this._country = aCountryCode}
}

const organization = new Organization({ name: "aaa", country: "BG" });

function getOrganization() {
  return organization
}

result += `<h1>${getOrganization().name}</h1>`; // 읽기
getOrganization().name = newName // 쓰기
