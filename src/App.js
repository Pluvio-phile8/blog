import logo from './logo.svg';
import './App.css';
import profileImage from './profileImage.jpg'
import ProfileImage from './components/ProfileImage';
import Profile from './components/Profile';
import Link from './components/Link';
import Brief from './components/Brief';
const User = {
  name: 'Nguyen Sy Ben',
  major: 'Software Engineer',
  dob: '28/01/2004',
  gender: 'Male',
  phone: '0336407016',
  email: 'benns2801@gmail.com',
  address: '90A Hoang Huu Nam, Thu Duc City, HCM City'
}
function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='card-body'>
              <Profile name={User.name}
                major={User.major}
                dob={User.dob}
                gender={User.gender}
                phone={User.phone}
                email={User.email}
                address={User.address} />
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='card'>
              <div className='card-header text-uppercase text-center'>About me</div>
              <div className='card-body'>
                <a href='https://www.facebook.com/sheerhypocrisy14159/'>
                  <ProfileImage image={profileImage} />
                </a>
                <Brief message={'Aspiring to utilize my academic background and passion for Software to contribute effectively to a dynamic organization, while continuously learning and enhancing my skills to achieve professional growth and excellence.'} />
                <Link link={"https://github.com/Pluvio-phile8"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
