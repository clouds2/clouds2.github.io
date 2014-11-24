---
layout: page
title: Tags
---

<!--from http://hamishwillee.github.io/2014/06/06/tags-in-jekyll-without-plugins/ -->

Tags: {% for tagitem in site.tags %} [{{ tagitem[0] }}](#tag_{{ tagitem[0] }}) {% endfor %}


<hr>

{% for tagitem in site.tags %}

<div id="tag_{{ tagitem[0] }}">
<h2> {{ tagitem[0] }} </h2>
 <ul>
  {% for post in site.posts %}
      {% if post.tags contains tagitem[0] %}         
        <li>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <!--
          {% if post.tags != empty %} <div class="tag-icon-image"> {% for tag in post.tags %} <div class="tag-link"><a href="#{{ tag }}">{{ tag }}</a></div> {% endfor %}</div>{% endif %} 
         </div>-->
		</li>
      {% endif %}
  {% endfor %}
</ul>

</div>
{% endfor %}



