(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"4R2C":function(module,t,e){"use strict";var n=e("VbXa"),s=e.n(n),a=e("pVnL"),o=e.n(a),r=e("q1tI"),i=e.n(r),c=e("N1om"),u=e.n(c),l=e("q5zD"),m=e("JiLy"),d=e.n(m),p=e("yhVA"),g=e.n(p),b=function MoreOrLess(t){var e=t.ariaProps,n=t.buttonContext,s=t.onClick,a=t.more,r=g()("Read more about #{buttonContext}",{buttonContext:n}),c=g()("Read less about #{buttonContext}",{buttonContext:n});return i.a.createElement("span",{className:"rc-MoreOrLess body-2-text color-hint-text"},a?i.a.createElement("button",o()({type:"button",onClick:s,"aria-label":r,className:"nostyle button-link"},e),g()("more")," ",i.a.createElement(l.a,{name:"chevron-down",className:"toggle-arrow"})):i.a.createElement("button",o()({type:"button",onClick:s,"aria-label":c,className:"nostyle button-link"},e),g()("less")," ",i.a.createElement(l.a,{name:"chevron-up",className:"toggle-arrow"})))},f=function(t){function AssignmentInstructionSection(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).state={expanded:!0},e.toggleExpand=function(){e.setState(function(t){var e;return{expanded:!t.expanded}})},e}var e;return s()(AssignmentInstructionSection,t),AssignmentInstructionSection.prototype.render=function render(){var t=this.state.expanded,e=this.props,n=e.title,s=e.children,a="instructions-container-".concat(u()(n)),o={"aria-controls":a,"aria-expanded":t};return i.a.createElement("div",{className:"rc-AssignmentInstructionSection"},i.a.createElement("div",{className:"title-container bgcolor-primary-light"},i.a.createElement("h3",{className:"body-2-text"},n),i.a.createElement(b,{more:!t,onClick:this.toggleExpand,ariaProps:o,buttonContext:n})),t&&i.a.createElement("div",{className:"instructions-content-container",id:a},s))},AssignmentInstructionSection}(i.a.Component);t.a=f},"5Vga":function(module,exports,t){},JiLy:function(module,exports,t){var e=t("OeM7"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var s={transform:void 0},a=t("aET+")(e,s);e.locals&&(module.exports=e.locals)},N1om:function(module,exports,t){var e,n=t("sgoq")(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});module.exports=n},OeM7:function(module,exports,t){},beVP:function(module,exports,t){var e=t("5Vga"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var s={transform:void 0},a=t("aET+")(e,s);e.locals&&(module.exports=e.locals)},fxeD:function(module,t,e){"use strict";var n=e("VbXa"),s=e.n(n),a=e("17x9"),o=e.n(a),r=e("q1tI"),i=e.n(r),c=e("beC1"),u=e("4R2C"),l=e("beVP"),m=e.n(l),d=function(t){function AssignmentInstructions(){return t.apply(this,arguments)||this}var e;return s()(AssignmentInstructions,t),AssignmentInstructions.prototype.render=function render(){var t=this.props.instructions;if(null==t)return null;return i.a.createElement("div",{className:"rc-AssignmentInstructions"},i.a.createElement("div",{className:"introduction"},i.a.createElement(c.a,{content:t.introduction,assumeStringIsHtml:!0,display:"inline-block"})),t.sections&&t.sections.map(function(t){return i.a.createElement(u.a,{title:t.title,key:t.title},i.a.createElement(c.a,{content:t.content,assumeStringIsHtml:!0,display:"inline-block"}))}))},AssignmentInstructions}(i.a.Component);d.propTypes={instructions:o.a.shape({introduction:o.a.any.isRequired,sections:o.a.arrayOf(o.a.shape({content:o.a.object.isRequired,title:o.a.string.isRequired}))})},t.a=d},pr3t:function(module,t,e){"use strict";e.r(t);var n=e("q1tI"),s=e.n(n),a=e("8cuT"),o=e.n(a),r=e("F/us"),i=e.n(r),c=e("fxeD"),u=e("jsrg"),l=e("L1vm"),m=e("dAof"),d=e("sQ/U"),p=e("nLAy"),g=e("VMeS"),b=i.a.compose(l.a.createTrackedContainer(function(){return{namespace:{page:"peer_review_instructions"}}}),o()(["PeerAssignmentStore","PeerPermissionsAndProgressesStore","PeerViewSubmissionStore"],function(t,e){var n=t.PeerAssignmentStore,s=t.PeerPermissionsAndProgressesStore,a=t.PeerViewSubmissionStore,o,r=n.getState().assignment;return{hasLoaded:"loaded"===n.getState().loadState&&"loaded"===s.getState().loadState,instructions:r&&r.instructions,loadedPeerViewSubmissionId:a.getState().submissionId,isSubmitted:s.getState().isSubmitted,latestSubmissionId:s.getState().latestSubmissionId}}),Object(u.a)(function(t){var e;return t.hasLoaded},s.a.createElement(g.a,{className:"rc-PeerItemInstructions"})),Object(m.a)(function(t,e){var n=e.itemMetadata,s=e.isSubmitted,a=e.latestSubmissionId,o=e.loadedPeerViewSubmissionId,r;s&&a&&(o!==a&&t.executeAction(p.d,{userId:d.a.get().id,courseId:n.get("course").get("id"),itemId:n.get("id"),submissionId:a}))}))(c.a);t.default=b}}]);
//# sourceMappingURL=98.3da220e252414a4d2d34.js.map