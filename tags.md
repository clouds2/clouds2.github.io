---
layout: page
permalink: /tags/
---

<div id="tags">
 2   <h1>Tags</h1>
 3   <ul class="tag-box inline">
 4   {% for item in (0..site.tags.size) %}{% unless forloop.last %}
 5     {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
 6     <li><a href="#{{ this_word | cgi_escape }}">{{ this_word }} <span>{{ site.tags[this_word].size }}</span></a></li>
 7   {% endunless %}{% endfor %}
 8   </ul>
 9 
10   {% for item in (0..site.tags.size) %}{% unless forloop.last %}
11     {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
12   <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
13   <ul class="posts">
14     {% for post in site.tags[this_word] %}{% if post.title != null %}
15     <li itemscope><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
16     {% endif %}{% endfor %}
17   </ul>
18   {% endunless %}{% endfor %}
19 </div>