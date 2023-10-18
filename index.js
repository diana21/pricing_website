// make sure page already fully loaded correctly
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");

  // js for free plan
  var freePlanMonthlyInput = document.getElementById("free-plan-pricing-toggle-monthly");
  freePlanMonthlyInput.addEventListener("click", function () {
    document.getElementById("price-dollar-freePlan").innerText = "$0";
    document.getElementById("price-time-freePlan").innerText = "/monthly";

    var freePlanMonthlyDetails = document.getElementsByClassName("free-plan-monthly-detail")[0];
    freePlanMonthlyDetails.classList.add("d-flex");
    freePlanMonthlyDetails.classList.remove("d-none");

    var freePlanYearlyDetails = document.getElementsByClassName("free-plan-yearly-detail")[0];
    freePlanYearlyDetails.classList.remove("d-flex");
    freePlanYearlyDetails.classList.add("d-none");
  });

  var freePlanAnnualyInputs = document.getElementById("free-plan-pricing-toggle-annually");
  freePlanAnnualyInputs.addEventListener("click", function () {
    console.log("click annually");

    var freePlanPriceDollarAnnually = document.getElementById("price-dollar-freePlan");
    freePlanPriceDollarAnnually.innerText = "$0";

    var freePlanPriceTimeAnnually = document.getElementById("price-time-freePlan");
    freePlanPriceTimeAnnually.innerText = "/annually";

    var freePlanYearlyDetails = document.getElementsByClassName("free-plan-yearly-detail")[0];
    freePlanYearlyDetails.classList.add("d-flex");
    freePlanYearlyDetails.classList.remove("d-none");

    var freePlanMonthlyDetails = document.getElementsByClassName("free-plan-monthly-detail")[0];
    freePlanMonthlyDetails.classList.remove("d-flex");
    freePlanMonthlyDetails.classList.add("d-none");
  });
  // end of js for free plan

  // js for pro plan
  var proPlanMonthlyInput = document.getElementById("pro-plan-pricing-toggle-monthly");
  proPlanMonthlyInput.addEventListener("click", function () {
    document.getElementById("price-dollar-proPlan").innerText = "$3";
    document.getElementById("price-time-proPlan").innerText = "/monthly";

    var proPlanMonthlyDetails = document.getElementsByClassName("pro-plan-monthly-detail")[0];
    proPlanMonthlyDetails.classList.add("d-flex");
    proPlanMonthlyDetails.classList.remove("d-none");

    var proPlanYearlyDetails = document.getElementsByClassName("pro-plan-yearly-detail")[0];
    proPlanYearlyDetails.classList.remove("d-flex");
    proPlanYearlyDetails.classList.add("d-none");
  });

  var proPlanAnnuallyInputs = document.getElementById("pro-plan-pricing-toggle-annually");
  proPlanAnnuallyInputs.addEventListener("click", function () {
    console.log("click annually");

    var proPlanPriceDollarAnnually = document.getElementById("price-dollar-proPlan");
    proPlanPriceDollarAnnually.innerText = "$36";

    var proPlanPriceTimeAnnually = document.getElementById("price-time-proPlan");
    proPlanPriceTimeAnnually.innerText = "/annually";

    var proPlanYearlyDetails = document.getElementsByClassName("pro-plan-yearly-detail")[0];
    proPlanYearlyDetails.classList.add("d-flex");
    proPlanYearlyDetails.classList.remove("d-none");

    var proPlanMonthlyDetails = document.getElementsByClassName("pro-plan-monthly-detail")[0];
    proPlanMonthlyDetails.classList.remove("d-flex");
    proPlanMonthlyDetails.classList.add("d-none");
  });
  // end of js for pro plan

  // js for unlimited plan
  var unlimitedPlanMonthlyInput = document.getElementById("unlimited-plan-pricing-toggle-monthly");
  unlimitedPlanMonthlyInput.addEventListener("click", function () {
    document.getElementById("price-dollar-unlimitedPlan").innerText = "$15";
    document.getElementById("price-time-unlimitedPlan").innerText = "/monthly";

    var unlimitedPlanMonthlyDetails = document.getElementsByClassName("unlimited-plan-monthly-detail")[0];
    unlimitedPlanMonthlyDetails.classList.add("d-flex");
    unlimitedPlanMonthlyDetails.classList.remove("d-none");

    var unlimitedPlanYearlyDetails = document.getElementsByClassName("unlimited-plan-yearly-detail")[0];
    unlimitedPlanYearlyDetails.classList.remove("d-flex");
    unlimitedPlanYearlyDetails.classList.add("d-none");
  });

  var unlimitedPlanAnnuallyInputs = document.getElementById("unlimited-plan-pricing-toggle-annually");
  unlimitedPlanAnnuallyInputs.addEventListener("click", function () {
    console.log("click annually");

    var unlimitedPlanPriceDollarAnnually = document.getElementById("price-dollar-unlimitedPlan");
    unlimitedPlanPriceDollarAnnually.innerText = "$540";

    var unlimitedPlanPriceTimeAnnually = document.getElementById("price-time-unlimitedPlan");
    unlimitedPlanPriceTimeAnnually.innerText = "/annually";

    var unlimitedPlanYearlyDetails = document.getElementsByClassName("unlimited-plan-yearly-detail")[0];
    unlimitedPlanYearlyDetails.classList.add("d-flex");
    unlimitedPlanYearlyDetails.classList.remove("d-none");

    var unlimitedPlanMonthlyDetails = document.getElementsByClassName("unlimited-plan-monthly-detail")[0];
    unlimitedPlanMonthlyDetails.classList.remove("d-flex");
    unlimitedPlanMonthlyDetails.classList.add("d-none");
  });
  // end of js for unlimited plan

  const rotateIconFAQClick = document.querySelectorAll(".iconFAQ");
  const childFAQAppears = document.querySelectorAll(".childFAQ");

  if (rotateIconFAQClick.length > 0) {
    for (i = 0; i < rotateIconFAQClick.length; i++) {
      let rotated = false;
      let iconFAQ = rotateIconFAQClick[i];
      let childFAQ = childFAQAppears[i];

      iconFAQ.addEventListener("click", function () {
        if (rotated) {
          iconFAQ.style.transform = "rotate(0deg)";
          rotated = false;
          childFAQ.classList.add("d-none");
        } else {
          iconFAQ.style.transform = "rotate(90deg)";
          rotated = true;
          childFAQ.classList.remove("d-none");
        }
      });
    }
  }
  // end of ICON FAQ
});
