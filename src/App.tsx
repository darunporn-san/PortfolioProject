import './App.css'
import { Route,Switch } from 'react-router-dom'
import Sidebar from './modules/apps/Sidebar'
import HomePage from './modules/homepage'
import Skill from './modules/skill'
import About from './modules/about'
import Contact from './modules/contact'
import Expirence from './modules/expirence'
import i18n from './shared/lib'
import { useTranslation } from 'react-i18next';
import { useEffect ,useState} from 'react'

const  App = (props:any) =>{
	const [active, setActive] = useState(true);
	const [slide, setSlide] = useState(false);
	const [times, setTimes] = useState("");
	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("language", lang);
		setActive(!active);
		localStorage.setItem("timestamp", JSON.stringify(new Date().getTime()));
	};

	const openMenu = () => {
		var x = document.getElementById("sidebar");
		var hoverInv: any = document.querySelectorAll("[id^=menuName]");
		if (x?.style.display === "" || x?.style.display === "none") {
			x.style.display = "table";
			x.style.maxWidth = "200px";
		} else if (x?.style.display === "block") {
			x.style.display = "none";
		}
		document.getElementById("menumobile")!.style.display = "none";
		document.getElementById("closemobile")!.classList.add("activeClose");
		document.getElementById("layoutPage")!.style.transform = "translateX(-60%)";
		document.getElementById("layoutPage")!.style.position = "initial";
		if (hoverInv.length > 0) {
			document.getElementById("logos")!.style.width = "100px";
			document.getElementById("logos")!.style.height = "100px";
			document.getElementById("languageChange")!.style.transform =
				"translate(100%, 5%)";
			for (var i = 0; i < hoverInv.length; i++) {
				hoverInv[i].style.display = "initial";
			}
		}
	};

	const closeMenu = () => {
		document.getElementById("sidebar")!.style.display = "none";
		document.getElementById("menumobile")!.style.display = "block";
		document.getElementById("closemobile")!.classList.remove("activeClose");
		document.getElementById("layoutPage")!.style.transform = "none";
	};
	useEffect(() => {
		setTimes(localStorage.getItem("timestamp") || "");
		if (localStorage !== null) {
			const diff = (new Date().getTime() - +times) / (60 * 1000);
			if (Math.floor(diff) > 30 && +times !== 0) {
				localStorage.clear();
			}
		}
		if (localStorage.getItem("language") === null) {
			i18n.changeLanguage("en");
			setActive(true);
		} else if (localStorage.getItem("language") === "en") {
			i18n.changeLanguage("en");
			setActive(true);
		} else if (localStorage.getItem("language") === "th") {
			i18n.changeLanguage("th");
			setActive(false);
		}
	}, [times]);

	return (
		<div className="d-flex bd-highlight">
			<div className="sidebar bd-highlight" id="sidebar">
				<Sidebar changeLanguage={changeLanguage} active={active} />
			</div>
			<div className="menumobile" onClick={openMenu} id="menumobile">
				<i
					className="material-icons"
					style={{ verticalAlign: "top", fontSize: "48px" }}>
					menu
				</i>
			</div>
			<div className="closemobile" id="closemobile" onClick={closeMenu}>
				<i
					className="material-icons"
					style={{ verticalAlign: "top", fontSize: "48px" }}>
					navigate_before
				</i>
			</div>
			{/* <div className="slideLoading">
          <div className ="squreLoading">Test</div>
      </div>  */}
			<div className="layoutPage" id="layoutPage">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about" component={About} />
					<Route path="/skill" component={Skill} />
					<Route path="/expirence" component={Expirence} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		</div>
	);
}



export default App
