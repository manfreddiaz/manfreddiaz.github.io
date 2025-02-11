---
layout: distill
title: The Many Problems with ML Evaluation
description: Distilling the persistent issues with ML evaluation through examples
tags: ml evaluation elo statistics social-choice
giscus_comments: true
date: 2025-02-10
featured: false
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: false
chart:
  chartjs: false
  echarts: false
  vega_lite: false
tikzjax: false
typograms: false
pretty_table: true

authors:
  - name: Manfred Diaz
    url: "https://manfreddiaz.github.io"
    affiliations:
      name: Mila, University of Montreal

bibliography: 2025-02-10-problems-with-ml-evaluation.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: The Structure of ML Evaluation
  - name: The Problems with Evaluation
    subsections:
      - name: The Statistical Method
      - name: Metrics Aggregation 

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Introduction

Fundamental to AI and ML, like any scientific discipline, is the ability to identify and measure scientific progress. Generally, the tenets of conceptual and methodological definitions of scientific progress have been extensively debated in the philosophy of science<d-cite key="niiniluoto2024scientificprogress"></d-cite>. In ML, determining progress has been offloaded, as a proxy measure, to the estimating the value of _tangible_ research __artifacts__  such as models, algorithms, or architectures on sets of purposefully built __tasks__, grouped in datasets, benchmarks, or environment suites<d-cite key="raji2021mlbenchmarking">. 

The evaluation methodologies we currently employ have emerged from unclear community-driven dynamics and the particularities of each area. And while in recent years there has been steady progress toward gaining a foundational understanding of the problem by leveraging techniques from statistics<d-cite key="chan2020rlstatistics,agarwal2021drlprecipice"></d-cite>, game theory<d-cite key="balduzzi2018reeval,omidshafiei2019alpahrank"></d-cite>, or social choice theory<d-cite key="rofin2022votenrank,lanctot2023vase"></d-cite> that offered more principled approaches, I believe the shortcomings persist even within the application of these novel methods. These problems are evermore critical in today's context. The development and potential deployment of Large Language Models (LLMs) to tackling challenging tasks represents a growing need to execute well-grounded and transparent evaluations. Ergo, I believe it is timely to revisit the foundations of the problem.

In this post, the first of a three-part series, I want to share my perspective on the numerous persistent issues in ML evaluation. To illustrate these problems, I have constructed several scenarios —some synthetic and others based on previous work in evaluation-- and will walk you through the sometimes unexpected and contradictory results that existing evaluation methodologies produce in these scenarios. In the next post of the series, I will dive into what I see as the fundamental missing ingredient to make sense of these issues: _ML evaluation is, first and foremost, a decision-making problem_.


## The Structure of ML Evaluation



## The Problems with Evaluation

### Statistical Evaluation


| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left 1       |    center 1    |       right 1 |
| Left 2       |    center 2    |       right 2 |
| Left 3       |    center 3    |       right 3 |


### Metrics Aggregation



## Takeways

