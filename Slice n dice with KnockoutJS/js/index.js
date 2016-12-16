
function SiteViewModel() {
  var self = this;
  self.navigation = [ "about", "method", "work", "contact", "blog" ];
  self.intro = [
    { h: "Who we are", p: "A team of design lovers with a special way of doing things." },
    { h: "Our work", p: "We love what we do and we believe it shines through in the results." },
    { h: "Our location", p: "South east of the UK, a mere stone's throw away from London." }
  ];
  self.features = [
    { h: "Web design", icon: '', p: "We create completely bespoke, striking designs that work alongside your brand to engage and enthral your audiennce. Clarity is key." },
    { h: "Web development", icon: '', p: "We integrate edge content managment and e-commenrce system, develop mobile applications and other technical stuff." },
    { h: "Content Strategy", icon: '', p: "We take the time to understand what it is you want to say and help you develop copy that is engaging and informative." }
  ];
}


ko.applyBindings(new SiteViewModel());
