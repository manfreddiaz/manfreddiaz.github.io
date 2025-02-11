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
  .th-inner {
    text-align: center
  }
  
  td {
    vertical-align: middle;
    text-align: center;
  }

---

## Introduction

Fundamental to AI and ML, like any scientific discipline, is the ability to identify and measure scientific progress. Generally, the tenets of conceptual and methodological definitions of scientific progress have been extensively debated in the philosophy of science<d-cite key="niiniluoto2024scientificprogress"></d-cite>. In ML, determining progress has been offloaded, as a proxy measure, to the estimating the value of _tangible_ research __artifacts__  such as models, algorithms, or architectures on sets of purposefully built __tasks__, grouped in datasets, benchmarks, or environment suites<d-cite key="raji2021mlbenchmarking">. 

The evaluation methodologies we currently employ have emerged from unclear community-driven dynamics and the particularities of each area. And while in recent years there has been steady progress toward gaining a foundational understanding of the problem by leveraging techniques from statistics<d-cite key="chan2020rlstatistics,agarwal2021drlprecipice"></d-cite>, game theory<d-cite key="balduzzi2018reeval,omidshafiei2019alpahrank"></d-cite>, or social choice theory<d-cite key="rofin2022votenrank,lanctot2023vase"></d-cite> that offered more principled approaches, I believe the shortcomings persist even within the application of these novel methods. These problems are evermore critical in today's context. The development and potential deployment of Large Language Models (LLMs) to tackling challenging tasks represents a growing need to execute well-grounded and transparent evaluations. Ergo, I believe it is timely to revisit the foundations of the problem.

In this post, the first of a three-part series, I want to share my perspective on the numerous persistent issues in ML evaluation. To illustrate these problems, I have constructed several scenarios —some synthetic and others based on previous work in evaluation-- and will walk you through the sometimes unexpected and contradictory results that existing evaluation methodologies produce in these scenarios. In the next post of the series, I will dive into what I see as the fundamental missing ingredient to make sense of these issues: _ML evaluation is, first and foremost, a decision-making problem_.



## The Problems with Evaluation

### Statistical Evaluation

The first scenario we study is related to the use of _statistics_<d-cite key="savage1954statistics, wesserman2004statistics"></d-cite> to understand the evaluation of ML artifacts over multiple conditions, namely, hyper-parameters configuration, multiple seeds, etc. The most common application of statistical inference to ML evaluation probably arises in reinforcement learning. There, any given artifact (e.g., a policy) is evaluated on a task (e.g., an Atari game) for $n$ different conditions (e.g., random seeds), resulting in $n$ values for a given metric (e.g., average return)<d-cite key="chan2020rlstatistics,agarwal2021drlprecipice"></d-cite>. The table below depicts a synthetic example inspired by such a scenario where we may need to __rank__ a set of algorithms given their evaluation over multiple __seeds__ on a __fixed task__. 

<table>
    <caption>Table 1.</caption>
    <thead>
        <tr>
            <th rowspan=2>Algorithm</th>
            <th colspan=5>Seeds</th>
        </tr>
        <tr>
          <th>$S_1$</th>
          <th>$S_2$</th>
          <th>$S_3$</th>
          <th>$S_4$</th>
          <th>$S_5$</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Model 1</td>
            <td>100</td>
            <td>80</td>
            <td>80</td>
            <td>80</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Model 2</td>
            <td>80</td>
            <td>80</td>
            <td>80</td>
            <td>75</td>
            <td>80</td>
        </tr>
        <tr>
            <td>Model 3</td>
            <td>80</td>
            <td>80</td>
            <td>85</td>
            <td>50</td>
            <td>85</td>
        </tr>
    </tbody>
</table>

__Assumptions__. The application of the statistical approach to evaluation assumes that the $n$ metric values $u_{1} \sim U_1, u_2 \sim U_2, \ldots, u_n \sim U_n$ are drawn independently from identically distributed random variables $U_1, U_2, \ldots, U_n$<d-cite key="agarwal2021drlprecipice"></d-cite>. 

__Reductions__.Then, it seems that the statistical evaluation of ML artifacts is a two-level decision-making problem. First, designers must define which statistics to utilize to summarize the data. Next, the artifact that optimizes the metric is selected. The first decision conditions the choice and, in consequence, our understanding of the relative strength of the artifacts.


<table>
    <caption>Table 2.</caption>
    <thead>
        <tr>
            <th rowspan=2>Algorithms</th>
            <th colspan=6>Statistical Reductions</th>
        </tr>
        <tr>
          <th>max</th>
          <th>min</th>
          <th>mean&plusmn;std</th>
          <th>median</th>
          <th>iqm</th>
          <th>b-iqm</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Model 1</td>
            <td>100</td>
            <td>80</td>
            <td>84&plusmn;8.0</td>
            <td>80</td>
            <td>80.00</td>
            <td></td>
        </tr>
        <tr>
            <td>Model 2</td>
            <td>80</td>
            <td>70</td>
            <td>79&plusmn;2.0</td>
            <td>80</td>
            <td>80.00</td>
            <td></td>
        </tr>
        <tr>
            <td>Model 3</td>
            <td>85</td>
            <td>50</td>
            <td>76&plusmn;13</td>
            <td>80</td>
            <td>81.67</td>
            <td></td>
        </tr>
    </tbody>
</table>

__Analysis__. Even in this simple yet plausible scenario, every statistic we considered produces a different ranking or choice among artifacts for the given data.
The example in~\autoref{tab:task-artifact-statistical} highlights a pathological case that arises by selecting \textit{mean} and \textit{standard deviation} as statistics. Noting the overlapping intervals of $84 \pm 8.0$ and $79 \pm 2.0$ for $\textbf{A}_1$ and $\textbf{A}_2$, respectively, can we confidently assert that artifact $\textbf{A}_1$ should be ranked over artifact $\textbf{A}_2$? Moreover, what does a standard deviation of $8$ units represents for artifact $\textbf{A}_1$ performance even if its value never drops from $80$ units in the data?    
Another interesting pathology emerges from the behaviour of the \textit{interquartile mean} (IQM) leveraged by~\citet{agarwal2021drlprecipice} for this setting. We observe that selecting this statistic favours artifact $\textbf{A}_3$ by removing artifacts $\textbf{A}_1$ and $\textbf{A}_2$ best conditions and $\textbf{A}_3$ worst. \textcolor{red}{mdc: talk about bootstrapped statistics b-iqm} 


__Challenging The Assumptions__. Do metric functions always reflect interval scales? Do 100 points increase in Atari reflective of an increase in skill? Are the next 100 points? Interval scales are required to compute statistics that assume normally distributed data<d-cite key="harwell2001measurementordinal"></d-cite>.
This is fundamental problem, and one that has been largely overlooked when applying statistical inference methods to ML evaluation. Not every statistic properly applies to summarize data; the application heavily depends on the nature of data scales<d-cite key="stevens1946scalesmeasurements"></d-cite>.  Profound implications<d-cite key="liddell2018ordinalmeasurements"></d-cite>.





### Metrics Aggregation

<table>
    <caption>Table 3.</caption>
    <thead>
        <tr>
            <th rowspan=2>Algorithms</th>
            <th colspan=3>Tasks</th>
        </tr>
        <tr>
          <th>$T_1$</th>
          <th>$T_2$</th>
          <th>$T_3$</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Model 1</td>
            <td>1000</td>
            <td>80</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Model 2</td>
            <td>800</td>
            <td>80</td>
            <td>86</td>
        </tr>
        <tr>
            <td>Model 3</td>
            <td>600</td>
            <td>80</td>
            <td>85</td>
        </tr>
    </tbody>
</table>


## Takeways

