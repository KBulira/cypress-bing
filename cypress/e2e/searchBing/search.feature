Feature: Search information about  Prowly Media Monitoring at bing.com browser

  Scenario: search about Prowly Media Monitoring
    Given open bing.com browser
    When write Prowly Media Monitoring
    Then find information about Prowly Media Monitoring
    And find pictures about Prowly Media Monitoring
    And find video about Prowly Media Monitoring
    And find maps about Prowly Media Monitoring
    And find shopping about Prowly Media Monitoring
    And find tools about Prowly Media Monitoring

  Scenario: use copilot find information about Prowly media monitoring
    When click on chat buttom
    And click on copilot
    And ask a question regarding information  Prowly media monitoring
    Then received information on chat
