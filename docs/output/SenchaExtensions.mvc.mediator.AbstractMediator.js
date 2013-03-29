Ext.data.JsonP.SenchaExtensions_mvc_mediator_AbstractMediator({"extends":"Deft.mvc.ViewController","uses":[],"subclasses":["CafeTownsend.mediator.AbstractMediator"],"superclasses":["Deft.mvc.ViewController"],"component":false,"tagname":"class","meta":{},"code_type":"ext_define","requires":[],"mixedInto":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Deft.mvc.ViewController<div class='subclass '><strong>SenchaExtensions.mvc.mediator.AbstractMediator</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/CafeTownsend.mediator.AbstractMediator' rel='CafeTownsend.mediator.AbstractMediator' class='docClass'>CafeTownsend.mediator.AbstractMediator</a></div><h4>Files</h4><div class='dependency'><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator' target='_blank'>AbstractMediator.js</a></div></pre><div class='doc-contents'><p>The mediator essentially fulfills the passive view pattern for a given view -- acts like a view controller,\nbut chose to use the suffix Mediator simply to distinguish it from application controllers that interact with\nservices and models.</p>\n\n<p>Handles view events, typically generated from user gestures, manipulates the view with animations, transitions,\nand/or dynamically building components within the view, and works with the views  API (again with events)\nbut also by way of getters and setters in order to bind data to and from the view.</p>\n\n<p>Currently the abstract mediator doesn't provide much in terms of base functionality as it extends from the\nbase controller (since we're really relying on Sencha MVC infrastructure where a controller knows how to\ninteract with a given view); the basic global event bus functionality is currently implemented in the\nbase, abstract controller as well.</p>\n\n<p>Consider using DeftJS here so a mediator is created and destroyed with it's accompanying view. The other issue\nwe'll run into without DeftJS view controller support is that currently the controller's (and hence all mediators)\nare singletons -- we really want the ability to create a unique mediator instance for each view.</p>\n\n<p>TODO: BMR: 02/22/13: Find a way to bake the view into this class automatically.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-eventBus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-cfg-eventBus' class='name expandable'>eventBus</a><span> : <a href=\"#!/api/SenchaExtensions.mvc.event.EventDispatcher\" rel=\"SenchaExtensions.mvc.event.EventDispatcher\" class=\"docClass\">SenchaExtensions.mvc.event.EventDispatcher</a></span></div><div class='description'><div class='short'>The application-level event bus. ...</div><div class='long'><p>The application-level event bus. This is\ninjected</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-eventBus' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-property-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-property-eventBus' class='name expandable'>eventBus</a><span> : String</span></div><div class='description'><div class='short'>TODO ...</div><div class='long'><p>TODO</p>\n<p>Defaults to: <code>&quot;eventBus&quot;</code></p></div></div></div><div id='property-inject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-property-inject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-property-inject' class='name expandable'>inject</a><span> : Object</span></div><div class='description'><div class='short'>/**\nDependency injections from DeftJS. ...</div><div class='long'><p>/**\nDependency injections from DeftJS.</p>\n<p>Defaults to: <code>{eventBus: &quot;eventBus&quot;}</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-logger' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-property-logger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-property-logger' class='name not-expandable'>logger</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'><p>The logger for the object.</p>\n</div><div class='long'><p>The logger for the object.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListenerBySelector' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-addEventListenerBySelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-addEventListenerBySelector' class='name expandable'>addEventListenerBySelector</a>( <span class='pre'>selector, eventType, handler</span> )</div><div class='description'><div class='short'>TODO ...</div><div class='long'><p>TODO</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventType</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>handler</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponentById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-getComponentById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-getComponentById' class='name expandable'>getComponentById</a>( <span class='pre'>id, view</span> ) : *</div><div class='description'><div class='short'>Simple utility method used to gain a reference to a view's sub-component by ID. ...</div><div class='long'><p>Simple utility method used to gain a reference to a view's sub-component by ID.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The unique ID of the component to search for.</p>\n</div></li><li><span class='pre'>view</span> : Object<div class='sub-desc'><p>The object to search for the component in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Reference to a component.</p>\n</div></li></ul></div></div></div><div id='method-getEventBus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-getEventBus' class='name expandable'>getEventBus</a>( <span class='pre'></span> ) : <a href=\"#!/api/SenchaExtensions.mvc.event.EventDispatcher\" rel=\"SenchaExtensions.mvc.event.EventDispatcher\" class=\"docClass\">SenchaExtensions.mvc.event.EventDispatcher</a></div><div class='description'><div class='short'>Returns the value of eventBus. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-cfg-eventBus\" rel=\"SenchaExtensions.mvc.mediator.AbstractMediator-cfg-eventBus\" class=\"docClass\">eventBus</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/SenchaExtensions.mvc.event.EventDispatcher\" rel=\"SenchaExtensions.mvc.event.EventDispatcher\" class=\"docClass\">SenchaExtensions.mvc.event.EventDispatcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSlideLeftTransition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-getSlideLeftTransition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-getSlideLeftTransition' class='name expandable'>getSlideLeftTransition</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Provides a simple slide left animation for our views. ...</div><div class='long'><p>Provides a simple slide left animation for our views.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The transition object.</p>\n</div></li></ul></div></div></div><div id='method-getSlideRightTransition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-getSlideRightTransition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-getSlideRightTransition' class='name expandable'>getSlideRightTransition</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Provides a simple slide right animation for our views. ...</div><div class='long'><p>Provides a simple slide right animation for our views.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The transition object.</p>\n</div></li></ul></div></div></div><div id='method-getViewByXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-getViewByXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-getViewByXType' class='name expandable'>getViewByXType</a>( <span class='pre'>xtype</span> )</div><div class='description'><div class='short'>TODO ...</div><div class='long'><p>TODO</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-init' class='name expandable'>init</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Sets up simple accessor method shortcuts for the global event bus. ...</div><div class='long'><p>Sets up simple accessor method shortcuts for the global event bus.</p>\n</div></div></div><div id='method-setEventBus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-cfg-eventBus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-setEventBus' class='name expandable'>setEventBus</a>( <span class='pre'>eventBus</span> )</div><div class='description'><div class='short'>Sets the value of eventBus. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-cfg-eventBus\" rel=\"SenchaExtensions.mvc.mediator.AbstractMediator-cfg-eventBus\" class=\"docClass\">eventBus</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventBus</span> : <a href=\"#!/api/SenchaExtensions.mvc.event.EventDispatcher\" rel=\"SenchaExtensions.mvc.event.EventDispatcher\" class=\"docClass\">SenchaExtensions.mvc.event.EventDispatcher</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setupGlobalEventListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SenchaExtensions.mvc.mediator.AbstractMediator'>SenchaExtensions.mvc.mediator.AbstractMediator</span><br/><a href='source/AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator-method-setupGlobalEventListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SenchaExtensions.mvc.mediator.AbstractMediator-method-setupGlobalEventListeners' class='name expandable'>setupGlobalEventListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Marker method. ...</div><div class='long'><p>Marker method. Concrete subclasses can implement to setup listeners to the global event bus with\nconfidence that it exists.</p>\n</div></div></div></div></div></div></div>","parentMixins":[],"files":[{"href":"AbstractMediator2.html#SenchaExtensions-mvc-mediator-AbstractMediator","filename":"AbstractMediator.js"}],"linenr":18,"inheritable":null,"members":{"cfg":[{"meta":{},"tagname":"cfg","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"eventBus","id":"cfg-eventBus"}],"css_var":[],"property":[{"meta":{},"tagname":"property","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"eventBus","id":"property-eventBus"},{"meta":{},"tagname":"property","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"inject","id":"property-inject"}],"method":[{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"addEventListenerBySelector","id":"method-addEventListenerBySelector"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"getComponentById","id":"method-getComponentById"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"getEventBus","id":"method-getEventBus"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"getSlideLeftTransition","id":"method-getSlideLeftTransition"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"getSlideRightTransition","id":"method-getSlideRightTransition"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"getViewByXType","id":"method-getViewByXType"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"init","id":"method-init"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"setEventBus","id":"method-setEventBus"},{"meta":{},"tagname":"method","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"setupGlobalEventListeners","id":"method-setupGlobalEventListeners"}],"event":[],"css_mixin":[]},"singleton":false,"override":null,"mixins":[],"private":null,"statics":{"cfg":[],"css_var":[],"property":[{"meta":{"static":true},"tagname":"property","owner":"SenchaExtensions.mvc.mediator.AbstractMediator","name":"logger","id":"property-logger"}],"method":[],"event":[],"css_mixin":[]},"name":"SenchaExtensions.mvc.mediator.AbstractMediator","enum":null,"html_meta":{},"id":"class-SenchaExtensions.mvc.mediator.AbstractMediator","alternateClassNames":[],"aliases":{},"inheritdoc":null});