from django.urls import path
from django.views.generic import TemplateView

from apps.teams.decorators import login_and_team_required

##local imports
from . import views
from .models import *
from .functions import *
from .tasks import *

app_name = 'tools'
urlpatterns = [
    path('store', views.store, name='store'),
    path('transcript/<str:unique_id>', views.transcript, name='transcript'),
    path('dashboard_contact', views.dashboard_contact, name='dashboard_contact'),
    path('dashboard_meetings', views.dashboard_meetings, name='dashboard_meetings'),
    path('dashboard_new_meeting', views.dashboard_new_meeting, name='dashboard_new_meeting'),
    path('dashboard_chatbot', views.dashboard_chatbot, name='dashboard_chatbot'),
    path('dashboard_statistics', views.dashboard_statistics, name='dashboard_statistics'),
    
    path('download_transcript_view/', views.download_transcript_view, name='download_transcript_view'),
    path('download_transcript_text_view/', views.download_transcript_text_view, name='download_transcript_text_view'),
]